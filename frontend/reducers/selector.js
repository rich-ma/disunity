 export const getMembership = (state, userId, serverId) => (
  Object.values(state.entities.serverMemberships)
    .filter(membership => (
      (membership.serverId === serverId && membership.userId === userId)
    ))[0]
  )

 export const getChannels = (state, serverId) => (
  Object.values(state.entities.channels)
    .filter(channel => (
      (channel.serverId === serverId)
    ))
  )

 export const getUsers = (state, serverId) => {
  let users = [];
  Object.values(state.entities.serverMemberships)
    .filter(membership => (
      (membership.serverId === serverId)
    )).forEach(membership => {
      users.push(state.entities.users[membership.userId]);
    })
    return users;
  }

export const getMessages = (state, channelId) => (
  Object.values(state.entities.messages)
    .filter(message => (
      (message.channelId === channelId)
    ))
)


