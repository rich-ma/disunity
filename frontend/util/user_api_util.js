export const updateUser = formData => (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${formData.get('id')}`,
    data: formData,
    contentType: false,
    processData: false
  })
);
