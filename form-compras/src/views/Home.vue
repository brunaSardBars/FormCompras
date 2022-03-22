<template>
  <div id="app">    
    <Title 
      second-text="Pacote de adesivos"
      icon="box-seam"
      back-ground-color="#5447F5"
    />
    <b-container>

      <b-form class="mt-3">
        <b-form-group
          id="label-sticker"
          label="Quais adesivos:"
          label-for="checkbox-sticker"
        >
          <b-form-checkbox-group
            id="checkbox-sticker"
            v-model="stickers"
            :options="stickerOptions"
            name="stickers"
            :state="!$v.stickers.$error"
          >
          <b-form-invalid-feedback :state="!$v.stickers.$error">
            Selecione ao menos uma opção.
          </b-form-invalid-feedback>
          </b-form-checkbox-group>          
        </b-form-group>

        <b-form-group
          id="label-count"
          label="Quantos adesivos de cada?"
          label-for="checkbox-sticker"
          class="mt-3"
        >
          <b-input-group>
            <b-input-group-prepend>
              <b-button 
                variant="primary"
                @click="removeQuantity()"
              >
                <b-icon icon="dash" variant="light"></b-icon>
              </b-button>
            </b-input-group-prepend>
            <b-form-input 
              id="input-quantity"
              v-model="quantity" 
              number 
              type="number"
              :class="$v.quantity.$error ? 'is-invalid' : ''"
            >
            </b-form-input>
            <b-input-group-append>
              <b-button 
                variant="primary"
                @click="addQuantity()"
              >
                <b-icon icon="plus" variant="light"></b-icon>
              </b-button>
            </b-input-group-append>            
            <b-form-invalid-feedback id="input-quantity-feedback">
              <span v-if="!$v.quantity.required"
                >Quantidade deve ser informada.</span
              >
              <span v-if="!$v.quantity.minValue"
                >Quantidade deve ser maior que zero.</span
              >
            </b-form-invalid-feedback> 
          </b-input-group>  
        </b-form-group>

        <b-form-group
          id="label-sticker"
          label="Quais adesivos:"
          label-for="checkbox-sticker"
          class="mt-3"
        >
          <b-form-textarea
            id="textarea"
            v-model="notes"
            placeholder="Alguma dúvida? Recado?"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>

        <b-row align-h="center" class="mt-3">
          <b-col cols="12" md="4">
            <b-button 
              type="button"
              block
              class="w-100"
              variant="primary"
              @click="save()"
              >
                Comprar
            </b-button>
          </b-col>
        </b-row>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import Title from '@/components/FormTitle.vue'
import { required, minValue, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'Home',
  components: {
    Title
  },
  data() {
    return {
      stickers: [],
      stickerOptions: [
        { value: 'react', text: 'React' },
        { value: 'vue', text: 'Vue' },
        { value: 'angular', text: 'Angular' },
      ],
      quantity: 0,
      notes: '',
      order: {
        lstProducts: []
      }
    }
  },
  methods: {
    addQuantity() {
      this.quantity += 1;
    },
    removeQuantity() {
      this.quantity -= 1;
    },
    save() {
      this.$v.$touch()

      if (this.$v.$invalid) {
        this.$toasted.error('Informe os campos corretamente.')
      } else {
        this.order.notes = this.notes;

        this.stickers.forEach(item => {
          let newItem =  {
            product: item,
            quantity: this.quantity
          }

          this.order.lstProducts.push(newItem)

        })

        this.$toasted.success('Produtos adicionados no Carrinho com sucesso.')
        this.$router.push({name: 'Checkout', params: { order: this.order }})
      }
    }
  },
  validations: {
    stickers: {
      required,
      minLength: minLength(1)
    },
    quantity: {
      required,
      minValue: minValue(1)
    }    
  }
}
</script>
