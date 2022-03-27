export const getFormSchema = (dynamicForm) => ({
  formItem: [
    {
      type: 'title',
      title:'大标题'
    },
    {
      type: 'input',
      label: '账号',
      field: 'name',
      value: '',
      props: {
        placeholder: '请输入账号(长度6个字符)',
      },
      rules: [
        {
          required: true,
          message: '请输入账号',
        },
        {
          pattern: /\d{6}/,
          message: '账号长度为6个字符',
        },
      ],
    },
    {
      type: 'input',
      label: '数字',
      field: 'number',
      value: '',
      props: {
        placeholder: '请输入数字',
        type:"number"
      },
      rules: [
        {
          required: true,
          message: '请输入数字',
        }
      ],
    },
    {
      type: 'input',
      label: '金额',
      field: 'digit',
      value: '',
      props: {
        placeholder: '请输入金额',
        maxlength:9
      },
      rules: [
        {
          required: true,
          message: '请输入金额'
        },
        {
          pattern: /^(([1-9][0-9]*)|(([0]\.\d{1,6}|[1-9][0-9]*\.\d{1,6})))$/,
          message: '只能输入6位小数',
        }
      ],
    },

    
    {
      type: 'picker',
      label: '选择器',
      field: 'name2',
      showPicker: false,
      value: '',
      list: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      props: {
        placeholder: '选择器',
      },
      rules: [
        {
          required: true,
          message: '请选择',
        },
      ],
      eventObject: {},
    },
    {
      type: 'datetimePicker',
      label: '时间',
      field: 'datetimePicker',
      showPicker: false,
      value: '',
      list: [],
      props: {
        placeholder: '请选择时间',
      },
      rules: [
        {
          required: true,
          message: '请选择时间',
        },
      ],
      eventObject: {

      },
    },
    {
      type: 'radio',
      label: '用户类型',
      field: 'roles',
      value: [],
      list: [
        {
          name: '船舶人员',
          value: '0',
        },
        {
          name: '船舶代理',
          value: '1',
        },
      ],
      loading: true,
      rules: [
        {
          required: true,
          message: '请选择用户类型',
          type: 'array',
        },
      ],
      eventObject: {
        change:(val)=>{
           dynamicForm.value.formSchema.formItem.forEach((item,index) => {
             if(item.field=="roleType"){ 
                if(val==0){
                  item.list[0].hidden = true
                }else{
                  item.list[0].hidden = false
                }
             }
          });
        }
      }
    },
    {
      type: 'checkbox',
      label: '角色',
      field: 'roleType',
      value: [],
      list: [
        {
          name: '申报类型',
          value: '0', 
          hidden:false
        },
        {
          name: '生活污水储',
          value: '1', 
          hidden:false
        }
      ],
      loading: true,
      rules: [
        {
          required: true,
          message: '请选择角色',
          type: 'array',
        },
      ],
    },
    {
      type: 'uploader',
      title: '上传作业图片',
      field: 'imgUrl', 
      value: [],
      list: [],
      props: {
        placeholder: '',
      },
      rules: [
        {
          required: true,
          message: '请上传作业图片',
        },
      ],
      eventObject: {}
    }
  ],
})
