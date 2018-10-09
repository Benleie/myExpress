<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>  {{ blog.title }}  </title>
    <link rel="stylesheet" href="//cdn.bootcss.com/semantic-ui/2.1.8/semantic.min.css">
    <link rel="stylesheet" href="/css/style.css">
    <script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
    <script src="//cdn.bootcss.com/semantic-ui/2.1.8/semantic.min.js"></script>
  </head>
  <body>
  
  <template>
    <div class="header"> 
      <Nav></Nav>
      <NavSetting></NavSetting>  
      <Notification></Notification>
    </div>
  </template>
  

  <script>
  import Nav from "./components/Nav.vue";
  import NavSetting from "./components/NavSetting.vue";
  import Notification from "./components/Notification.vue";

  export default {
    name: 'header',
    data() {
      return {};
    },
    components: { Nav, NavSetting, Notification }
  }
  </script>
  