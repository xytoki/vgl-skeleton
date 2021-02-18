import { MeshBasicMaterial } from "three"
import { VglMaterialWithMap } from "vue-gl/src/mixins"
import { name, color } from "vue-gl/src/types"
import { validateName } from "vue-gl/src/validators"

/**
 * A material for drawing geometries in a simple shaded (flat or wireframe) way,
 * corresponding [THREE.MeshBasicMaterial](https://threejs.org/docs/index.html#api/materials/MeshBasicMaterial).
 * This material is not affected by lights.
 *
 * Properties of [VglMaterial](vgl-material) are also available as mixin.
 */

export default {
    mixins: [VglMaterialWithMap],
    props: {
        /** CSS style color of the material. */
        color: { type: color, default: "#fff" },
        /** The color map of the material. */
        map: { type: name, validator: validateName }
    },
    computed: {
        /** The THREE.MeshBasicMaterial instance. */
        inst: () => new MeshBasicMaterial({ wireframe: true })
    },
    watch: {
        inst: {
            handler(inst) {
                inst.color.setStyle(this.color)
            },
            immediate: true
        },
        color(newColor) {
            this.inst.color.setStyle(newColor)
            this.update()
        }
    }
}
