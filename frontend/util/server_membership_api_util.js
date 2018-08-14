export const createMembership = data => {
  return ($.ajax({
    method: 'POST',
    url: `/api/servers_memberships`,
    data: {
      name: data.name,
      membership: { server_id: data.id }
    }
  })
)};

export const deleteMembership = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/servers_memberships/${id}`
  })
);
