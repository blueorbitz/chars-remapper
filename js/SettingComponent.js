const SettingComponent = {
  kcmFileInput: function () {
    const elem = document.getElementById('kcm-file');
    if (elem.files.length === 0) {
      toastr.error('Definition file is required');
      return null;
    }
    
    const selectedFile = elem.files[0];
    const fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent) {
      const rawText = fileLoadedEvent.target.result;
      const groupText = rawText.split('\n');

      // validate first
      // DO NOT trim, as space is a valid conversion too
      let input = '', output = '';
      for (let i = 0; i < groupText.length; i += 2) {
        if (groupText[i].length === 0) {
          i++;
          continue;
        }

        if (groupText[i].length !== groupText[i+1].length) {
          toastr.error('Input/Output map not match!', 'Error');
          return; // error
        }
        input += groupText[i];
        output += groupText[i+1];
      }

      // process for storage
      model.set({ input: input, output: output });
      toastr.success('Successfully update map!');
    };

    fileReader.readAsText(selectedFile, "UTF-8");
  },
  view: function () {
    return [
      m('div.pull-right',
        m('a.btn', { style: { 'margin-top': '20px' }, href: '#!/remap' },
          m('i.glyphicon.glyphicon-arrow-left')
        )
      ),
      m('h3', 'Setting'),
      m('form', [
        m('div.form-group', [
          m('label[for="kcm-file"]', 'Mapping File (.txt)'),
          m('input.form-control-file[type="file"][id="kcm-file"][accept=".txt"]'),
        ]),
        // m('p', 'or'),
        // m('div.form-group',
        //   m('input.form-control[type="text"][id="url-file"][placeholder="Key Character Map url"]')
        // ),
        m('button.btn.btn-primary.btn-sm"', { type: 'button', onclick: SettingComponent.kcmFileInput }, 'Update'),
      ]),
    ];
  }
}
