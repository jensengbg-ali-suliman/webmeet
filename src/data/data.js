async function getData() {
  const res = fetch('https://api.jsonbin.io/b/5f6b3568302a837e956c0b81', {
    method: 'GET',
  })
  const data = await res.json()
  console.log(data)
}
