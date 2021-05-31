async function getData() {
  var response = await axios.get(
    "http://api.openweathermap.org/data/2.5/forecast?q=hanoi&appid=dac1be3433ca48145eb2b8b7782e99f9"
  );
  //document.getElementById("data").innerHTML = response.data;
  var data = JSON.parse(JSON.stringify(response.data));
  var html = "";
  for (let i = 0; i < data.list.length; i++) {
    html += `<div class="item">
    <div>
        <span>Thành phố :Hà nội </span>
    </div>
    <div>
        <span>Thời gian : </span>
        <span class="date">${data.list[i].dt_txt}</span>
    </div>
    <div>
        <span>Nhiệt độ : </span>
        <span class="deg">${data.list[i].main.temp_max - 273}</span>
    </div>
    <div>
        <span>Tốc độ gió : </span>
        <span class="win">${data.list[i].wind.speed}</span>
    </div>
</div>`;
  }
  document.getElementById("data").innerHTML = html;
  console.log(data.list);
}
