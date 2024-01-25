<template>
  <div>
    <select name="city" id="billing_area" class="country_to_state city_select " autocomplete="city" required>
      <option value="">Выбрать область</option>
    </select>
    <select name="city" id="billing_city" class="country_to_state city_select " autocomplete="city" required>
      <option value="">Выбрать город</option>
    </select>
  </div>
</template>

<script>
// export default {
//   name: 'DiplomaProjectCityList',

//   data() {
//     return {

//     };
//   },

//   mounted() {

//   },

//   methods: {

//   },
// };
let dataList = {};
fetch('https://api.hh.ru/areas/5').then(response => {
  return response.json()
}).then(
  json => {
    dataList = json;
    json.areas.forEach(area => {
      var opt = document.createElement('option');
      opt.value = area.id;
      opt.innerHTML = area.name;
      billing_area.appendChild(opt);
    }
    );
  }
);


billing_area.addEventListener('change', () => {
  billing_city.innerHTML = '';
  dataList.areas.filter(item => item.id == billing_area.options[billing_area.selectedIndex].value)[0].areas.forEach(
    area => {
      var opt = document.createElement('option');
      opt.value = area.id;
      opt.innerHTML = area.name;
      billing_city.appendChild(opt);
    }
  )

});
</script>

<style lang="scss" scoped></style>