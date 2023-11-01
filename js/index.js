

var winId = document.getElementById('winId');

function getDownloadConfig() {
  var config = {
    method: 'get',
    headers: {
      accept: 'application/json'
    },
  }
  fetch('https://api.keepwork.com/core/v0/paracraftConfigs/paracraftDownload', config).then(function(response) { return response.json() })
    .then(function(res) {
      winId.href = res.data.config.winUrl;
    });;
}
getDownloadConfig()