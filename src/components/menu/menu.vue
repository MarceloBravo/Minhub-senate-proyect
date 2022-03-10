<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">TGIF</a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
            <ul class="navbar-nav">
              
              <li class="nav-item">
                <router-link :to="{path: '/'}" class="nav-link">Home</router-link>
              </li>
              
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Congress 113
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <router-link :to="{path: '/congress-senate'}" class="dropdown-item">Senate</router-link>
                  <router-link :to="{path: '/congress-house'}" class="dropdown-item">House</router-link>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Attendance
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <router-link :to="{path: '/attendance-senate'}" class="dropdown-item">Senate</router-link>
                  <router-link :to="{path: '/attendance-house'}" class="dropdown-item">House</router-link>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Party Loyalty
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <router-link :to="{path: '/loyalty-senate'}" class="dropdown-item">Senate</router-link>
                  <router-link :to="{path: '/loyalty-house'}" class="dropdown-item">House</router-link>
                </ul>
              </li>
            
            </ul>
          
        </div>
        </div>
      </nav>
</template>

<script>
    export default {
        name: 'MenuComponent'
    }
</script>