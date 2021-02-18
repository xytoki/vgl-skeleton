<template>
    <h1>vgl-skeleton demo</h1>
    <div>
        <vgl-renderer :alpha="true" ref="render" id="vgl-canvas">
            <vgl-box-geometry
                name="box"
                width="100"
                height="100"
                depth="100"
            ></vgl-box-geometry>

            <vgl-wireframe-material name="mat" color="#ff0000" />
            <vgl-scene ref="scene" name="defaultScene">
                <vgl-axes-helper size="500" />
                <vgl-mesh geometry="box" material="mat"></vgl-mesh>

                <vgl-spine
                    :skel="spineSkel"
                    :skelScale="0.3"
                    :atlas="spineAtlas"
                    :texture="spineTextureImg"
                    :animation="spineAnimation"
                    name="spineobj"
                    v-if="mode == 'spine'"
                />
                <vgl-dragonbones
                    v-if="mode == 'dragonbones'"
                    :skel="dbSkel"
                    :atlas="dbTex"
                    :texture="dbTextureImg"
                    :animation="dbAnimation"
                    dragonbonesName="Dragon"
                    armatureName="Dragon"
                    position="0 100 0"
                    rotation="0 0 0 ZYX"
                    scale="0.3 -0.3 0.3"
                />
            </vgl-scene>
            <vgl-perspective-camera
                name="pcam"
                position="50 35 500"
                :zoom="zoom"
                :fov="fov"
            ></vgl-perspective-camera>
        </vgl-renderer>

        <aside class="control-panel">
            <select v-model="mode">
                <option>spine</option>
                <option>dragonbones</option>
            </select>
            <span v-if="mode == 'spine'">
                <select v-model="spineAnimation">
                    <option>death</option>
                    <option>idle</option>
                    <option>jump</option>
                    <option>run</option>
                    <option>shoot</option>
                    <option>walk</option>
                </select>
            </span>
            <span v-if="mode == 'dragonbones'">
                <select v-model="dbAnimation">
                    <option>fall</option>
                    <option>jump</option>
                    <option>stand</option>
                    <option>walk</option>
                </select></span
            >
            <label>
                Zoom
                <input v-model="zoom" type="range" max="2" step="0.02" /> Fov
                <input v-model="fov" type="range" max="100" step="1" />
            </label>
        </aside>
    </div>
</template>

<script>
import * as VueGL from "vue-gl/src"
import { VglSpine, VglDragonbones } from "@/combined"
import VglWireframeMaterial from "./VglWireframeMaterial"
import spineSkel from "./assets/spine/spineboy.json"
import spineAtlas from "./assets/spine/spineboy.atlas"
import spineTexture from "./assets/spine/spineboy.png"

import dbSkel from "./assets/dragonbones/Dragon_ske.json"
import dbTex from "./assets/dragonbones/Dragon_tex.json"
import dbImg from "./assets/dragonbones/Dragon_tex.png"

export default {
    name: "App",
    components: { VglSpine, VglDragonbones, VglWireframeMaterial, ...VueGL },
    data() {
        return {
            mode: "",
            zoom: 1,
            spineSkel,
            spineAtlas,
            dbSkel,
            dbTex,
            spineAnimation: "run",
            dbAnimation: "walk",
            fov: 50
        }
    },
    async mounted() {
        if (typeof window.__THREE_DEVTOOLS__ !== "undefined") {
            window.__THREE_DEVTOOLS__.dispatchEvent(
                new CustomEvent("observe", { detail: this.$refs.scene.inst })
            )
            window.__THREE_DEVTOOLS__.dispatchEvent(
                new CustomEvent("observe", { detail: this.$refs.render.inst })
            )
        }
        this.$refs.render.inst.setPixelRatio(window.devicePixelRatio)
        this.spineTextureImg = new Image()
        this.spineTextureImg.src = spineTexture
        await new Promise((resolve) => {
            this.spineTextureImg.onload = resolve
        })
        this.dbTextureImg = new Image()
        this.dbTextureImg.src = dbImg
        await new Promise((resolve) => {
            this.dbTextureImg.onload = resolve
        })
        this.mode = "dragonbones"
    }
}
</script>

<style>
#vgl-canvas {
    width: 400px;
    height: 400px;
    background-position: 0 0, 10px 10px;
    background-size: 20px 20px;
    background-image: linear-gradient(
            45deg,
            #ddd 25%,
            transparent 0,
            transparent 75%,
            #ddd 0,
            #ddd
        ),
        linear-gradient(45deg, #ddd 25%, #fff 0, #fff 75%, #ddd 0, #ddd);
}
</style>
