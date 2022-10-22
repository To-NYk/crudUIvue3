<template>
    <div class="popup">
        <div class="popup-inner">
            <slot />
            <button class="popup-close">
                Close Popup
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name : "Popup"
}
</script>

<style lang="scss" scoped>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    border-color: rgba(0, 0, 0, 0.2);

    /* Позиционирование */
    display: flex;
    align-items: center;
    justify-content: center;
}
.popup-inner {
    background: #c3c3c3;
    padding: 32px;
}
</style>