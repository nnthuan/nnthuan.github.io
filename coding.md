1. Mã sạch
2. Tên ý nghĩa sẽ trả lời tất cả các câu hỏi lớn:
  - Tại sao nó tồn tại?
  - Những gì nó làm?
  - Nó được sử dụng như thế nào?
  
```c#
//Tránh
int d;  // thời gian trôi qua tính bằng ngày 
//Nên
int elapsedTimeInDays;
```
```c#
//Nên
int realDaysPerIdealDay = 4;
const int WORK_DAYS_PER_WEEK = 5;
int sum = 0;
for (int j=0; j < NUMBER_OF_TASKS; j++) {
	int realTaskDays = taskEstimate[j] * realDaysPerIdealDay;
	int realTaskWeeks = (realdays / WORK_DAYS_PER_WEEK);
	sum += realTaskWeeks;
}
```
3. Một tên lớp nên là một danh từ , không phải là một động từ.
4. Các phương thức nên có tên động từ hoặc cụm động từ như postPayment, removePage, save ...
5. Domain Names
  - Sử dụng pattern names: Factory, Visitor, Decorator, etc. 
6. Functions
  - Đầu tiên: chúng nên nhỏ. Thứ hai: chúng nên nhỏ hơn thế.
  - Các chức năng hầu như không bao giờ dài 20 dòng .
  - Các chức năng nên được minh bạch rõ ràng .
  - Mỗi chức năng kể một câu chuyện.
  - Mỗi chức năng dẫn bạn đến một điều tiếp theo theo thứ tự hấp dẫn.
  6.1. Khối và thụt lề
    - Các khối trong câu lệnh if , other , while , v.v. nên dài một dòng, có thể sẽ là một lệnh gọi hàm.
    - Cuộc gọi chức năng này có thể có một tên mô tả hay.
    - Mức thụt lề của hàm không được lớn hơn một hoặc hai.
  6.2. Làm một việc
    ```
    FUNCTIONS SHOULD DO ONE THING. THEY SHOULD DO IT WELL. THEY SHOULD DO IT ONLY
    ```
7. Đọc mã từ trên xuống dưới: Quy tắc từ chối
  - Viết mã giống như một tập hợp các đoạn TO từ trên xuống trong đó mỗi đoạn cung cấp các hướng dẫn thêm về đoạn trước nó.
8. Chia chức năng thành hai: render (boolean isSuite) => renderForSuite (), renderForSingleTest ()
9. Không có tác dụng phụ
  - Chức năng không nên làm những điều mà bạn không mong đợi. tức là: checkPassword (đăng nhập, mật khẩu) => bên trong khởi tạo phiên người dùng ... khởi tạo phiên người dùng phải là chức năng riêng của nó.
10. Phân tách truy vấn lệnh
  - Các hàm nên làm một cái gì đó hoặc trả lời một cái gì đó, nhưng không phải cả hai. propertyExists và setAttribution phải là các hàm khác nhau. Tránh những thứ như setAndCheck IfExists.
11. Đừng lặp lại chính mình
  - Sao chép có thể là gốc rễ của mọi tội lỗi trong phần mềm.
12. Sử dụng ngoại lệ thay vì trả về mã
  - Nó là tốt hơn để ném một ngoại lệ.
      Mã cuộc gọi sạch hơn.
      Logic của nó không bị che khuất bởi việc xử lý lỗi.
      Cố gắng tách thuật toán khỏi xử lý lỗi:


