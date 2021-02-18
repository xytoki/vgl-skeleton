import VglObject3d from "vue-gl/src/core/vgl-object3d"
import _dragonBones from "./dragonbones-threejs/dragonBones"
export const dragonBones = _dragonBones
import { Texture } from "three"

/**
 * A component of vue-gl for Dragonbones,
 *
 * Properties of [VglObject3d](vue-gl/src/core/vgl-object3d.js) are also available as mixin.
 */

export default {
    name: "VglDragonBones",
    mixins: [VglObject3d],
    props: {
        skel: {
            type: Object,
            required: true
        },
        atlas: {
            type: Object,
            required: true
        },
        texture: {
            required: true
        },
        armatureName: {
            type: String,
            required: true
        },
        dragonbonesName: {
            type: String
        },
        animation: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            destroyed: false
        }
    },
    computed: {
        /** The dragonbones.threejs.ArmatureDisplay instance. */
        inst() {
            const factory = dragonBones.ThreeFactory.factory
            const texture =
                typeof this.texture === "function"
                    ? new Texture(this.texture())
                    : new Texture(this.texture)
            texture.needsUpdate = true
            factory.parseDragonBonesData(this.skel)
            factory.parseTextureAtlasData(this.atlas, texture)
            const armatureDisplay = factory.buildArmatureDisplay(
                this.armatureName,
                this.dragonbonesName
            )
            return armatureDisplay
        }
    },
    watch: {
        inst(inst, oldInst) {
            if (inst != oldInst) {
                this.setAnimation()
            }
        }
    },
    methods: {
        setAnimation() {
            this.inst.animation.play(this.animation)
        },
        update() {
            if (this.destroyed) return

            // update the animation
            dragonBones.ThreeFactory.factory.dragonBones.advanceTime(-1.0)

            // render the scene
            this.vglObject3d.emit()
            requestAnimationFrame(this._update)
        }
    },
    mounted() {
        this.destroyed = false
        if (this.inst) {
            this.setAnimation()
            this.$watch("animation", this.setAnimation)
            this._update = this.update.bind(this)
            requestAnimationFrame(this._update)
        }
    },
    unmounted() {
        this.destroyed = true
        cancelAnimationFrame(this._update)
    }
}
