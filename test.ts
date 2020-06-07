Vue.component("test", {
    template: "#test",
    props: {
        test: {
            type: Array as Vue.PropType<number[]>,
            default: () => []
        }
    }
});
