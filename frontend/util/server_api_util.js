export const createServer = formData => (
  $.ajax({
    method: 'POST',
    url: 'api/servers',
    data: formData,
    contentType: false,
    processData: false
  })
);

export const updateServer = formData => (
  $.ajax({
    method: 'PATCH',
    url: `api/servers/${formData.get('id')}`,
    data: formData,
      contentType: false,
      processData: false
  })
);


export const fetchServers = () => (
  $.ajax({
    method: 'GET',
    url: `api/servers`,
  })
);

export const fetchServer = id => (
  $.ajax({
    method: 'GET',
    url: `api/servers/${id}`,
  })
);

export const deleteServer = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/servers/${id}`,
  })
);