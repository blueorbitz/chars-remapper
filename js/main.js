const root = document.getElementById('root');

m.route(root, '/remap', {
  '/remap': RemapComponent,
  '/setting': SettingComponent,
});

toastr.options = {
  'positionClass': 'toast-top-center',
  'timeOut': '500',
}