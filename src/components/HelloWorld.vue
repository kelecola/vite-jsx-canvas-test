<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      visible: true
    }
  },
  render() {
    return <input v-show={this.visible} />;
  }
};
</script>
