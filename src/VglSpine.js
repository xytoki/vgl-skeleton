import VglObject3d from "vue-gl/src/core/vgl-object3d"
import _spine from "./spine-threejs/spine-threejs"
export const spine = _spine
/**
 * A component of vue-gl for Spine,
 *
 * Properties of [VglObject3d](vue-gl/src/core/vgl-object3d.js) are also available as mixin.
 */

export default {
    name: "VglSpine",
    mixins: [VglObject3d],
    props: {
        materialCustomizer: {
            type: Function,
            default: (parameters) => {
                parameters.depthTest = false
            }
        },
        skel: {
            type: Object,
            required: true
        },
        skelScale: {
            type: Number,
            default: 1
        },
        atlas: {
            type: String,
            required: true
        },
        texture: {
            required: true
        },
        animationTrack: {
            type: Number,
            default: 0
        },
        animation: {
            type: String,
            required: true
        },
        loop: {
            type: Boolean,
            default: true
        },
        skin: {
            type: String,
            default: "default"
        }
    },
    data() {
        return {
            tick: Date.now() / 1000,
            destroyed: false
        }
    },
    computed: {
        inst() {
            /** The spine.threejs.skeletonMesh instance. */
            return new spine.threejs.SkeletonMesh(
                this.getSpineData(this.skel, this.atlas, this.texture),
                this.materialCustomizer
            )
        }
    },
    watch: {
        inst(inst, oldInst) {
            if (inst != oldInst) {
                this.setSkin()
                this.setAnimation()
            }
        }
    },
    methods: {
        getSpineData(skel, atlas, texture) {
            const atlasObj = new spine.TextureAtlas(atlas, (filename) => {
                if (typeof texture === "function") {
                    return new spine.threejs.ThreeJsTexture(texture(filename))
                }
                return new spine.threejs.ThreeJsTexture(texture)
            })
            const SkeletonJson = new spine.SkeletonJson(
                new spine.AtlasAttachmentLoader(atlasObj)
            )
            SkeletonJson.scale = this.skelScale
            return SkeletonJson.readSkeletonData(skel)
        },
        update() {
            if (this.destroyed) return
            // calculate delta time for animation purposes
            let now = Date.now() / 1000
            let delta = now - this.tick
            this.tick = now

            // update the animation
            this.inst.update(delta)

            // render the scene
            this.vglObject3d.emit()
            requestAnimationFrame(this._update)
        },
        setAnimation() {
            this.inst.state.setAnimation(
                this.animationTrack,
                this.animation,
                this.loop
            )
        },
        setSkin() {
            this.inst.skeleton.setSkinByName(this.skin)
        }
    },
    mounted() {
        this.destroyed = false
        if (this.inst) {
            this.setSkin()
            this.setAnimation()
            this.$watch("skin", this.setSkin)
            this.$watch("loop", this.setAnimation)
            this.$watch("animation", this.setAnimation)
            this.$watch("animationTrack", this.setAnimation)
            this._update = this.update.bind(this)
            requestAnimationFrame(this._update)
        }
    },
    unmounted() {
        this.destroyed = true
        cancelAnimationFrame(this._update)
    }
}
