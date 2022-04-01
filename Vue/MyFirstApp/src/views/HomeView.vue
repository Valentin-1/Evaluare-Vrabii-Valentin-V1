<script>
export default {
  data() {
    return {
      prodList: [
        {
          Nr: 1,
          NumeleProd: "Xiaomi Mi A1",
          Pretul: 0,
          NrDeCaltitati: 0,
          PretTotal: 0,
        },
        {
          Nr: 2,
          NumeleProd: "Xiaomi Redmi Note 6",
          Pretul: 0,
          NrDeCaltitati: 0,
          PretTotal: 0,
        },
        {
          Nr: 3,
          NumeleProd: "Xiaomi Redmi Note 6 Pro",
          Pretul: 0,
          NrDeCaltitati: 0,
          PretTotal: 0,
        },
      ],
      inpPret: "",
      inpCant: "",
      restSum: 0,
    };
  },
  methods: {
    addProd() {
      this.restSum = this.inpPret * this.inpCant;
         for(let i = 1; i < this.prodList; i++){
        this.prodList.push({Pretul: this.inpPret, NrDeCaltitati: this.inpCant, PretTotal: this.restSum})
      }
      console.log(this.restSum);
      //this.prodPush();
    },
    /*prodPush(){
      for(let i = 1; i < this.prodList; i++){
        this.prodList.push({Pretul: this.inpPret, NrDeCaltitati: this.inpCant, PretTotal: this.restSum})
        //this.Pretul *= this.NrDeCaltitati;
      }
    }*/
  },
};
</script>

<template>
  <div>
    <select name="" id="selectProd" >
      <option value="" v-for="item in prodList" :key="item.Nr">{{ item.NumeleProd }}</option>
    </select
    ><br />
    <input type="number" v-model="inpPret"><br />
    <input type="number" v-model="inpCant"><br />
    <button id="add" @click="addProd">Add</button>
    <button>Restart</button>
    <div>
      <table>
        <tr>
          <th class="info">Nr</th>
          <th class="info">Numele Produsului</th>
          <th class="info">Pretul unei cantitati</th>
          <th class="info">Numarul de cantitati</th>
          <th class="info">Pretul Total</th>
        </tr>

        <tr v-for="item in prodList" :key="item.Nr" class="info-2">
          <td class="info-2">{{ item.Nr }}</td>
          <td class="info-2">{{ item.NumeleProd }}</td>
          <td class="info-2">{{ item.NrDeCaltitati }}</td>
          <td class="info-2">{{ item.PretTotal }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>


<style scoped>
@import "@/assets/base.css";
</style>