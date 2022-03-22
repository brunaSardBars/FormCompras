<template>
  <b-container class="title" :style="{backgroundColor: backGroundColor , color: fontColor}">
    <b-row class="d-flex flex-row">
      <b-col 
        cols="9" 
        md="8"
        class="px-3 px-md-5"
        align-self="center"
      >
        <h1 class="title-default">{{ firstText }}</h1>
        <h1 class="title-name">{{ secondText }}</h1>
      </b-col>

      <b-col 
        cols="3" 
        md="4"
        class="px-md-3"
      >
        <p class="icon-size">
          <b-icon 
            :icon="icon">
          </b-icon>
        </p>
      </b-col>
    </b-row>       
  </b-container>
</template>

<script>
export default {
  name: 'FormTitle',
  props: {
    firstText: {
      type: String,
      require: false,
      default: 'Formulário para compra de'
    },
    secondText: {
      type: String,
      require: false,
      default: 'Produtos'
    },
    icon: {
      type: String,
      require: false,
      default: 'file-earmark'
    },
    backGroundColor: {
      type: String,
      require: false,
      default: 'blueviolet'
    },
    fontColor: {
      type: String,
      require: false,
      default: 'white'
    }
  }
}
</script>

<style scoped>
.title {
  border-radius: 0 0 90% 50%;
  padding-bottom: 20px;
}
.icon-size {
  font-size: 7rem;
  color: #3b3b3b;
}
.title-default {
  font-weight: 300;
  color: #dadcdd;
}

@media only screen and (max-width: 768px) {
  .icon-size {
    font-size: 3.8rem;    
  }

  .title-default,
  .title-name {
    font-size: 1.5rem;
  }
}
</style>
