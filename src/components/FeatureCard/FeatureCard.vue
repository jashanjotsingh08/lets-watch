<template>
  <div class="feature-card">
    <router-link to="">
      <img
        src="https://d16kd6gzalkogb.cloudfront.net/magazine_images/RosemarysBaby_quad_UK-1.jpg"
        alt="A movie background"
        class="feature-image"
      />
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.feature-card {
  position: relative;

  .feature-img {
    display: block;
    width: 100%;
    height: 300px;
    object-fit: cover;

    position: relative;
    z-index: 0;

    .details {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.6);
      padding: 16px;
      z-index: 1;

      h3 {
        color: #fff;
        margin-bottom: 16px;
      }

      p {
        color: #fff;
      }
    }
  }
}
</style>
