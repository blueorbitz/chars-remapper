const RemapController = {
  input: '',
  copy: function() {
    model.get(['input', 'output'], (items) => {
      const { input, output } = items;
      if (input == null || output == null) {
        toastr.error('Setting not found!', 'Error');
        return;
      }

      const mapped = {};
      for (let i = 0; i < input.length; i++)
        mapped[input[i]] = output[i];

      const inputMap = RemapController.input;
      let outputMap = ''
      for (let j = 0; j < inputMap.length; j++) {
        if (mapped[inputMap[j]] != null)
          outputMap += mapped[inputMap[j]];
        else
          outputMap += inputMap[j];
      }
      
      if (outputMap === '')
        return;

      navigator.clipboard.writeText(outputMap)
      .then(() => {
        toastr.success('copied!');
      })
      .catch(err => {
        toastr.error(err, 'Something went wrong');
      });
    });
  },
};

const RemapComponent = {
  view: function() {
    return [
      m('div.pull-right', 
        m('a.btn', {style: {'margin-top':'20px'}, href: '#!/setting'}, 
          m('i.glyphicon.glyphicon-cog')
        )
      ), 
      m('h3', 'Chars Remapper'), 
      m('form', [
        m('div.form-group', 
          m('input.form-control[type="password"][id="pre-password"][placeholder="Password"]', {
            value: RemapController.input,
            oninput: function (e) { RemapController.input = e.target.value; },
          })
        ),
        m('div.form-group.input-group', [
          m('input.form-control[type="password"][placeholder="Mapped Password"][readonly]', {
            value: RemapController.input,
          }),
          m('.input-group-btn[id="copy-map-pw"]', 
            m('button.btn', { type: 'button', onclick: RemapController.copy }, 'Copy')
          ),
        ])
      ]),
    ];
  }
}
