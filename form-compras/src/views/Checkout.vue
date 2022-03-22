<template>
  <b-container>
    <Title 
      first-text="Carrinho de Compras"
      second-text="Produtos"
      icon="cart"
      back-ground-color="#2BA816"
    />

    <h2 class="mt-3 text-center" v-if="order.lstProducts.length === 0">Ops! Carrinho vazio, <router-link :to="{name: 'Home'}">clique aqui</router-link> e comece a comprar agora</h2>

    <section v-else>


      <b-row >
        <b-col>
          <b-table 
            striped 
            hover 
            :items="order.lstProducts" 
            :fields="fields"
          ></b-table>

          <span>Observação: {{ order.notes }}</span>                   
        </b-col>
      </b-row>

      <b-row align-h="center" class="mt-3">
        <b-col cols="12" md="4">
          <b-button 
            type="button"
            block
            class="w-100"
            variant="success"
            @click="save()"
            >
              Finalizar
          </b-button>
        </b-col>
      </b-row>
    </section>
  </b-container>
</template>

<script>
import Title from '@/components/FormTitle.vue'

export default {
  name: 'FormCheckout',
  components: {
    Title
  },
  data() {
    return {
      order: {
        lstProducts: []
      },
      fields: [
        { key: 'product', label: 'Adesivo' },
        { key: 'quantity', label: 'Quantidade' }
      ]
    }
  },
  mounted() {  
    if (this.$route.params.order) { 
      this.order = this.$route.params.order
    }
  },
  methods: {
    save() {
      this.$toasted.success('Pedido realizado com sucesso. Você será encaminhado para a página de pagamento.')      
    }
  }
}
</script>
