
self.addEventListener('activate', async () => {
    // This will be called only once when the service worker is activated.
    try {
      const options = {}
      const subscription = await self.registration.pushManager.subscribe(options)
      registration.showNotification('ola')
      const socket = io('http://localhost:3000');
      socket.on("connect", () => {
        setTimeout(() => {
            registration.showNotification('conectado'+socket.id)
        }, 1000)
      })
      
      console.log(JSON.stringify(subscription))
    } catch (err) {
      console.log('Error', err)
    }
})