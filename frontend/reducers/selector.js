 export const getMembership = (state, userId, serverId) => (
  Object.values(state.entities.serverMemberships)
    .filter(membership => (
      (membership.serverId === serverId && membership.userId === userId)
    ))[0]
  )
