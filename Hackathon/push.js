var push = require('web-push')

let vapidKeys = {
    publicKey: 'BAyHLL57tfaESXuMce08bjrB0B-ncK7TU3ttTwvOFx4xznl-TAKrQ4IJ6c_WJrD3BlKMWvYlrXkIDSPfCgNeZ6A',
    privateKey: 'DzruI52HVKOz77eemCzFvmu9kGgWRQDbLdth9hQSJns'
  }

  push.setVapidDetails('mailto: test@code.co.us', vapidKeys.publicKey, vapidKeys.privateKey)

  let sub = {};

  push.sendNotification(sub, 'test message')