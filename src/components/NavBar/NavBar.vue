<template>
  <nav class="navbar" :class="{ 'is-active': active }" ref="root">
    <input type="checkbox" id="navbar-check" />
    <div class="navbar-header">
      <router-link to="/">
        <div class="navbar-title"><span>Lets</span>Watch</div>
      </router-link>
    </div>
    <div class="navbar-btn" @click.stop.prevent="dropdown.toggleDropdown()">
      <label for="navbar-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    <div class="navbar-links">
      <ul @click.stop.prevent="dropdown.close()">
        <li><a href="#">Movies</a></li>
        <li><a href="#">TV Shows</a></li>
        <li><a href="#">Top IMDB</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
export default {
  setup() {
    const active = ref(false);
    const dropdown = {
      close: () => {
        active.value = false;
      },
      toggleDropdown: () => (active.value = !active.value),
    };

    onBeforeUnmount(() => {
      document.removeEventListener('click', dropdown.close);
    });

    onMounted(() => {
      document.addEventListener('click', dropdown.close);
    });

    return {
      active,
      dropdown,
    };
  },
};
</script>

<style lang="scss">
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  background-color: #2c3d4e;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);

  .navbar-header {
    display: inline;
    .navbar-title {
      display: inline-block;
      color: #fff;
      font-size: 28px;
      padding: 10px 16px 10px 16px;
      span {
        color: #3ba575;
      }
    }
  }

  .navbar-links {
    ul {
      list-style: none;
      position: relative;
      padding: 0;

      li {
        display: inline-block;

        a {
          color: #fff;
          font-size: 18px;
          display: block;
          padding: 0px 10px;
          text-decoration: none;
        }
      }
      li:hover {
        border-radius: 4px;
        a {
          color: #42b883;
        }
      }
    }
  }

  #navbar-check {
    display: none;
  }

  .navbar-btn {
    display: none;
  }

  @media (max-width: 600px) {
    flex-wrap: wrap;
    .navbar-btn {
      display: inline-block;
      right: 0px;

      label {
        display: inline-block;
        width: 50px;
        height: 50px;
        padding: 13px;

        span {
          display: block;
          width: 25px;
          height: 10px;
          border-top: 2px solid #eee;
        }
      }
    }
    .navbar-btn:hover {
      span {
        border-top: 2px solid #42b883;
      }
    }
    .navbar-links {
      width: 100%;
      background-color: #2c3d4e;
      display: none;
      transition: all 0.3s ease-in;
      overflow-y: hidden;
      top: 50px;
      left: 0px;

      ul {
        display: flex;
        flex-direction: column;
        li {
          padding: 10px;
          a {
            display: block;
            width: 100%;
          }
        }
        li:hover {
          background-color: rgba(0, 0, 0, 0.3);
        }
      }
    }
    .navbar-btn:hover,
    .is-active .navbar-btn {
      label {
        background-color: rgba(0, 0, 0, 0.3) !important ;
        border-radius: 4px !important;
      }
    }
    // #navbar-check:not(:checked) ~ .navbar-links {
    //   height: 0px;
    // }
    :is(.is-active .navbar-links) {
      display: block !important;
      height: fit-content !important;
      overflow-y: auto !important;
    }
  }
}
</style>
