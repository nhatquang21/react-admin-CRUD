import polyglotI18nProvider from 'ra-i18n-polyglot';

const vietnameseMessages: any = {
  ra: {
    action: {
      add_filter: 'Thêm bộ lọc',
      add: 'Thêm',
      back: 'Trở về',
      bulk_actions: '%{smart_count} đã chọn',
      cancel: 'Hủy bỏ',
      clear_input_value: 'Xóa giá trị',
      clone: 'Nhân bản',
      confirm: 'Xác nhận',
      create: 'Tạo mới',
      delete: 'Xóa',
      edit: 'Sửa',
      export: 'Xuất',
      list: 'Danh sách',
      refresh: 'Làm mới',
      remove_filter: 'Bỏ bộ lọc',
      remove: 'Xóa bỏ',
      save: 'Lưu',
      search: 'Tìm kiếm',
      show: 'Hiển thị',
      sort: 'Sắp xếp',
      undo: 'Hoàn tác',
      unselect: 'Huỷ chọn',
      expand: 'Mở rộng',
      close: 'Đóng',
      open_menu: 'Mở menu',
      close_menu: 'Đóng menu',
    },
    boolean: {
      true: 'Có',
      false: 'Không',
      null: '',
    },
    page: {
      create: 'Tạo %{name}',
      dashboard: 'Bảng điều khiển',
      edit: '%{name} #%{id}',
      error: 'Đã xảy ra lỗi',
      list: 'Danh sách %{name}',
      loading: 'Đang tải',
      not_found: 'Không tìm thấy',
      show: '%{name} #%{id}',
      empty: 'Chưa có %{name} nào.',
      invite: 'Bạn có muốn tạo mới không?',
    },
    input: {
      file: {
        upload_several:
          'Nhấp để chọn một tệp tin hoặc kéo thả nhiều tệp tin để tải lên.',
        upload_single: 'Nhấp để chọn một tệp tin hoặc kéo thả để tải lên.',
      },
      image: {
        upload_several:
          'Nhấp để chọn một bức ảnh hoặc kéo thả nhiều bức ảnh để tải lên.',
        upload_single: 'Nhấp để chọn một bức ảnh hoặc kéo thả để tải lên.',
      },
      references: {
        all_missing: 'Không thể tìm thấy dữ liệu tham khảo.',
        many_missing:
          'Ít nhất một tài liệu tham khảo liên quan không còn tồn tại.',
        single_missing: 'Tài liệu tham khảo liên quan không còn tồn tại.',
      },
      password: {
        toggle_visible: 'Ẩn mật khẩu',
        toggle_hidden: 'Hiện mật khẩu',
      },
    },
    message: {
      about: 'Về',
      are_you_sure: 'Bạn có chắc chắn không?',
      bulk_delete_content:
        'Bạn có chắc chắn muốn xóa %{name} này? |||| Bạn có chắc chắn muốn xóa %{smart_count} vật phẩm này?',
      bulk_delete_title: 'Xóa %{name} |||| Xóa %{smart_count} vật phẩm %{name}',
      delete_content: 'Bạn có chắc chắn muốn xóa vật phẩm này?',
      delete_title: 'Xóa %{name} #%{id}',
      details: 'Chi tiết',
      error:
        'Đã xảy ra lỗi ở phía người dùng và yêu cầu của bạn không thể hoàn thành.',
      invalid_form: 'Dữ liệu nhập không đúng. Vui lòng kiểm tra lại',
      loading: 'Trang web đang tải, vui lòng đợi trong giây lát',
      no: 'Không',
      not_found:
        'Bạn đã nhập một URL sai hoặc bạn đã làm theo một liên kết không đúng.',
      yes: 'Có',
      unsaved_changes:
        'Một vài thay đổi của bạn chưa được lưu. Bạn có chắc là muốn bỏ qua chúng?',
    },
    navigation: {
      no_results: 'Không tìm thấy kết quả nào',
      no_more_results:
        'Trang số %{page} đã vượt giới hạn. Vui lòng trở lại trang trước.',
      page_out_of_boundaries: 'Trang số %{page} đã vượt giới hạn',
      page_out_from_end: 'Không thể đi tiếp sau trang cuối',
      page_out_from_begin: 'Không thể trở lại trước trang 1',
      page_range_info: '%{offsetBegin}-%{offsetEnd} của %{total}',
      page_rows_per_page: 'Số hàng trên mỗi trang:',
      next: 'Tiếp',
      prev: 'Trước',
    },
    auth: {
      auth_check_error: 'Vui lòng đăng nhập để tiếp tục',
      user_menu: 'Hồ sơ',
      username: 'Tên đăng nhập',
      password: 'Mật khẩu',
      sign_in: 'Đăng nhập',
      sign_in_error: 'Đăng nhập không thành công, vui lòng thử lại',
      logout: 'Đăng xuất',
      // changePassword: 'Đổi mật khẩu',
    },
    notification: {
      updated:
        'Cập nhật thành công |||| Cập nhật thành công %{smart_count} thành phần',
      created: 'Đã tạo thành công',
      deleted:
        'Đã xóa thành công |||| Xóa thành công %{smart_count} thành phần',
      bad_item: 'Thành phần không đúng',
      item_doesnt_exist: 'Thành phần không tồn tại',
      http_error: 'Lỗi giao tiếp với máy chủ',
      data_provider_error:
        'Lỗi dataProvider. Kiểm tra console để biết chi tiết.',
      i18n_error: 'Không thể tải bản dịch cho ngôn ngữ này',
      canceled: 'Hủy bỏ hành động',
      logged_out: 'Phiên làm việc của bạn đã kết thúc, vui lòng kết nối lại.',
    },
    validation: {
      required: 'Bắt buộc',
      minLength: 'Phải ít nhất %{min} ký tự',
      maxLength: 'Phải nhỏ hơn hoặc bằng %{max} ký tự',
      minValue: 'Phải lớn hơn hoặc bằng %{min}',
      maxValue: 'Phải nhỏ hơn hoặc bằng %{max}',
      number: 'Phải là số',
      email: 'Phải là địa chỉ email hợp lệ',
      oneOf: 'Phải chọn một trong số lựa chọn sau: %{options}',
      regex: 'Phải phù hợp với định dạng (regexp): %{pattern}',
    },
  },
  resources: {
    dishes: {
      name: 'Món ăn ',
      fields: {
        id: 'STT',
        name: 'Tên món ăn',
        price: 'Giá',
      },
    },
    customers: {
      name: 'Khách hàng',
      fields: {
        id: 'STT',
        name: 'Tên khách hàng',
        address: 'Địa chỉ',
        phoneNumber: 'Số điện thoại',
      },
    },
    orders: {
      name: 'Hóa đơn',
      fields: {
        id: 'STT',
        totalBill: 'Tổng hóa đơn',
        createdOn: 'Ngày tạo đơn',
        employeeId: 'Nhân viên phục vụ',
        customerId: 'Khách hàng',
      },
    },
    users: {
      name: 'Người dùng',
      fields: {
        id: 'STT',
        username: 'Tài khoản',
        createdOn: 'Ngày tạo đơn',
        updatedOn: 'Ngày cập nhật',
        roleId: 'Quyền',
      },
    },
    employees: {
      name: 'Nhân viên',
      fields: {
        id: 'STT',
        name: 'Tên',
        status: 'Trạng thái',
        userId: 'Tài khoản',
      },
    },
    roles: {
      name: 'Quyền',
      fields: {
        id: 'STT',
        name: 'Tên',
      },
    },
    menu: {
      name: 'Thực đơn',
      fields: {
        orderId: 'Hóa đơn',
        dishId: 'Món ăn',
        quantity: 'Số lượng',
        price: 'Giá',
      },
    },
  },
  buttons: {
    changePWD: 'Đổi mật khẩu ',
  },
  inputs: {
    pwd: 'Mật khẩu cũ',
    newPwd: 'Mật khẩu mới',
    confPwd: 'Xác nhận mật khẩu',
  },
  message: {
    changePWDSuccess: 'Đổi mật khẩu thành công',
    pwdDoNotMatch: 'Mật khẩu không khớp',
    oldPwdWrong: 'Mật khẩu cũ sai',
  },
};

const englishMessages: any = {
  ra: {
    action: {
      add_filter: 'Add filter',
      add: 'Add',
      back: 'Go Back',
      bulk_actions: '1 item selected |||| %{smart_count} items selected',
      cancel: 'Cancel',
      clear_array_input: 'Clear the list',
      clear_input_value: 'Clear value',
      clone: 'Clone',
      confirm: 'Confirm',
      create: 'Create',
      create_item: 'Create %{item}',
      delete: 'Delete',
      edit: 'Edit',
      export: 'Export',
      list: 'List',
      refresh: 'Refresh',
      remove_filter: 'Remove this filter',
      remove_all_filters: 'Remove all filters',
      remove: 'Remove',
      save: 'Save',
      search: 'Search',
      select_all: 'Select all',
      select_row: 'Select this row',
      show: 'Show',
      sort: 'Sort',
      undo: 'Undo',
      unselect: 'Unselect',
      expand: 'Expand',
      close: 'Close',
      open_menu: 'Open menu',
      close_menu: 'Close menu',
      update: 'Update',
      move_up: 'Move up',
      move_down: 'Move down',
      open: 'Open',
      toggle_theme: 'Toggle Theme',
      select_columns: 'Columns',
    },
    boolean: {
      true: 'Yes',
      false: 'No',
      null: ' ',
    },
    page: {
      create: 'Create %{name}',
      dashboard: 'Dashboard',
      edit: '%{name} %{recordRepresentation}',
      error: 'Something went wrong',
      list: '%{name}',
      loading: 'Loading',
      not_found: 'Not Found',
      show: '%{name} %{recordRepresentation}',
      empty: 'No %{name} yet.',
      invite: 'Do you want to add one?',
    },
    input: {
      file: {
        upload_several: 'Drop some files to upload, or click to select one.',
        upload_single: 'Drop a file to upload, or click to select it.',
      },
      image: {
        upload_several: 'Drop some pictures to upload, or click to select one.',
        upload_single: 'Drop a picture to upload, or click to select it.',
      },
      references: {
        all_missing: 'Unable to find references data.',
        many_missing:
          'At least one of the associated references no longer appears to be available.',
        single_missing:
          'Associated reference no longer appears to be available.',
      },
      password: {
        toggle_visible: 'Hide password',
        toggle_hidden: 'Show password',
      },
    },
    message: {
      about: 'About',
      are_you_sure: 'Are you sure?',
      auth_error: 'A error occurred while validating the authentication token.',
      bulk_delete_content:
        'Are you sure you want to delete this %{name}? |||| Are you sure you want to delete these %{smart_count} items?',
      bulk_delete_title: 'Delete %{name} |||| Delete %{smart_count} %{name}',
      bulk_update_content:
        'Are you sure you want to update this %{name}? |||| Are you sure you want to update these %{smart_count} items?',
      bulk_update_title: 'Update %{name} |||| Update %{smart_count} %{name}',
      clear_array_input: 'Are you sure you want to clear the whole list?',
      delete_content: 'Are you sure you want to delete this item?',
      delete_title: 'Delete %{name} #%{id}',
      details: 'Details',
      error: "A client error occurred and your request couldn't be completed.",

      invalid_form: 'The form is not valid. Please check for errors',
      loading: 'The page is loading, just a moment please',
      no: 'No',
      not_found: 'Either you typed a wrong URL, or you followed a bad link.',
      yes: 'Yes',
      unsaved_changes:
        "Some of your changes weren't saved. Are you sure you want to ignore them?",
    },
    navigation: {
      no_results: 'No results found',
      no_more_results:
        'The page number %{page} is out of boundaries. Try the previous page.',
      page_out_of_boundaries: 'Page number %{page} out of boundaries',
      page_out_from_end: 'Cannot go after last page',
      page_out_from_begin: 'Cannot go before page 1',
      page_range_info: '%{offsetBegin}-%{offsetEnd} of %{total}',
      partial_page_range_info:
        '%{offsetBegin}-%{offsetEnd} of more than %{offsetEnd}',
      current_page: 'Page %{page}',
      page: 'Go to page %{page}',
      first: 'Go to first page',
      last: 'Go to last page',
      next: 'Go to next page',
      previous: 'Go to previous page',
      page_rows_per_page: 'Rows per page:',
      skip_nav: 'Skip to content',
    },
    sort: {
      sort_by: 'Sort by %{field} %{order}',
      ASC: 'ascending',
      DESC: 'descending',
    },
    auth: {
      auth_check_error: 'Please login to continue',
      user_menu: 'Profile',
      username: 'Username',
      password: 'Password',
      sign_in: 'Sign in',
      sign_in_error: 'Authentication failed, please retry',
      logout: 'Logout',
    },
    notification: {
      updated: 'Element updated |||| %{smart_count} elements updated',
      created: 'Element created',
      deleted: 'Element deleted |||| %{smart_count} elements deleted',
      bad_item: 'Incorrect element',
      item_doesnt_exist: 'Element does not exist',
      http_error: 'Server communication error',
      data_provider_error: 'dataProvider error. Check the console for details.',
      i18n_error: 'Cannot load the translations for the specified language',
      canceled: 'Action cancelled',
      logged_out: 'Your session has ended, please reconnect.',
      not_authorized: "You're not authorized to access this resource.",
    },
    validation: {
      required: 'Required',
      minLength: 'Must be %{min} characters at least',
      maxLength: 'Must be %{max} characters or less',
      minValue: 'Must be at least %{min}',
      maxValue: 'Must be %{max} or less',
      number: 'Must be a number',
      email: 'Must be a valid email',
      oneOf: 'Must be one of: %{options}',
      regex: 'Must match a specific format (regexp): %{pattern}',
    },
    saved_queries: {
      label: 'Saved queries',
      query_name: 'Query name',
      new_label: 'Save current query...',
      new_dialog_title: 'Save current query as',
      remove_label: 'Remove saved query',
      remove_label_with_name: 'Remove query "%{name}"',
      remove_dialog_title: 'Remove saved query?',
      remove_message:
        'Are you sure you want to remove that item from your list of saved queries?',
      help: 'Filter the list and save this query for later',
    },
    configurable: {
      customize: 'Customize',
      configureMode: 'Configure this page',
      inspector: {
        title: 'Inspector',
        content: 'Hover the application UI elements to configure them',
        reset: 'Reset Settings',
        hideAll: 'Hide All',
        showAll: 'Show All',
      },
      Datagrid: {
        title: 'Datagrid',
        unlabeled: 'Unlabeled column #%{column}',
      },
      SimpleForm: {
        title: 'Form',
        unlabeled: 'Unlabeled input #%{input}',
      },
      SimpleList: {
        title: 'List',
        primaryText: 'Primary text',
        secondaryText: 'Secondary text',
        tertiaryText: 'Tertiary text',
      },
    },
  },
  resources: {
    dishes: {
      name: 'Dish |||| Dishes',
      fields: {
        id: 'ID',
        name: 'Name',
        price: 'Price',
      },
    },
    menu: {
      name: 'Menu',
      fields: {
        dishId: 'Dish',
        quantity: 'Quantity',
        price: 'Price',
      },
    },
  },
  buttons: {
    changePWD: 'Change Password',
  },
  inputs: {
    pwd: 'Old password',
    newPwd: 'New password',
    confPwd: 'Confirm password',
  },
  message: {
    changePWDSuccess: 'Change password successful',
    pwdDoNotMatch: 'The passwords do not match',
    oldPwdWrong: 'The old password is wrong',
  },
};

const getMessages = (locale: string) => {
  if (locale === 'en') {
    return englishMessages;
  }
  return vietnameseMessages;
};
const i18nProvider = polyglotI18nProvider(getMessages, 'en', [
  { locale: 'en', name: 'English' },
  { locale: 'vi', name: 'Vietnamese' },
]);

export default i18nProvider;
