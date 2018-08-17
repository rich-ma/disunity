export const createMessage = message => (
  $.ajax({
    method: 'POST',
    url: `api/channels/${message.channel_id}/`,
    data: { message }
  })
)
export const updateMessage = message => (
  $.ajax({
    method: 'PATCH',
    url: `api/messages/${message.id}`,
    data: { message }
  })
);

export const deleteMessage = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/messages/${id}`,
  })
);