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

  