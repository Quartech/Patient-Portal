<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable="md" type="dark" variant="dark">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand>
          <router-link to="/">Health Gateway</router-link>
        </b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item>
              <router-link to="/medications">Medications</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/immunizations">Immunizations</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/lab-results">Lab Results</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/profile">Profile</router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <br>
    <router-view/>
  </div>
</template>

<style>
/* Global styles go here */
#app {
  font-family: "Arial";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav a {
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #ffffff;
}
</style>
