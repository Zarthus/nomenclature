<script setup lang="ts"></script>

<template>
    <div id="square-particles">
        <div>
            <canvas></canvas>
        </div>
    </div>
</template>

<style scoped>
#square-particles {
    position: fixed;
    width: 100%;
    overflow: hidden;
    pointer-events: auto;

    z-index: -10;
}

#square-particles div {
    width: 100%;
}

#square-particles div canvas {
    background-color: var(--c-background);
    background-image: linear-gradient(90deg, rgba(20, 16, 20, 0.3) 50%, transparent 50%),
        linear-gradient(rgba(20, 16, 20, 0.3) 50%, transparent 50%);
    background-size: 1rem 1rem;
    background-repeat: repeat;

    width: 100%;
}
</style>
