// $(document).ready(function() {   // ready when html elements and DOM are loaded
//   $('#email').on('submit', function(e) {  //#Bắt event submit của thẻ có id: email
//     var email = $('#email').val(); //# Khai báo và gán giá trị thẻ có id: email vào biến email
//     var name = $('#name').val();
//     var login = $('#login').val();
//     e.preventDefault();   //# ngăn chặn hành động mặc định của button submit khi xảy ra sự kiện
//     if (name && email && login) {
//       $.ajax({
//         url: '/users',        //# gửi request tới server theo đường dẫn /users
//         type: 'post',        //# phương thức tương ứng là POST
//         dataType: 'json',   // # data gửi đi dưới dạng JSON
//         data: {name: name , email: email , login: login}   //# data gửi đi tương ứng với params[:user][:name]
//       })
//       .done(function(data) {    //#sau khi Ajax nhận được data từ server trả về và user được save
//         // $('tbody').append(data.user_data);   #chèn thêm data.user_data vào cuối thẻ <tbody>
//         // $('.users-size').text((parseInt($('.users-size').text()) + 1));  # lấy giá trị text của thẻ span có class = users-size,  chuyển về dạng int rồi cộng thêm 1, sau đó gán lại vào giá trị text của chính nó
//         alert("Created user!!");
//       })
//       .fail(function(){   
//         alert("Can create new user! We got some errors");
//       })
//     } else {
//       alert("Name can be blank");
//     }
//    return false;    
//   })
// })
