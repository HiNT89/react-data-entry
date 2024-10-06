# react-data-entry

## Mô tả

`react-data-entry` là một thư viện cung cấp các component nhập liệu (data entry) dành cho React, được tối ưu hóa để dễ dàng sử dụng và tuỳ biến. Thư viện này bao gồm các component cho việc chọn ngày, khoảng ngày và nhập liệu tiền tệ, với nhiều tuỳ chọn linh hoạt như định dạng đầu vào, kích thước, và giới hạn giá trị.

## Cài đặt

Để cài đặt thư viện, bạn có thể sử dụng npm hoặc yarn:

```bash
npm install react-data-entry
```

```bash
yarn add react-data-entry
```

## Sử dụng

### Component CCalendar

```javascript
import React, { useState } from "react";
import { CCalendar } from "react-data-entry";

const MyComponent = () => {
  const [date, setDate] = useState("");

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <CCalendar
      label="Select Date"
      name="calendar"
      placeholder="Choose a date"
      value={date}
      handleChange={handleChange}
      required={true}
      error="Date is required"
      picker="day"
      format="YYYY-MM-DD"
      width="300px"
    />
  );
};

export default MyComponent;
```

#### Props

- **label**: Nhãn cho trường nhập liệu (Tùy chọn).
- **required**: Có yêu cầu nhập dữ liệu hay không (Mặc định: false).
- **name**: Tên của trường input.
- **placeholder**: Văn bản gợi ý cho trường nhập liệu (Tùy chọn).
- **handleChange**: Hàm xử lý sự kiện khi giá trị của input thay đổi.
- **value**: Giá trị của input (chuỗi).
- **labelWidth**: Chiều rộng của nhãn (Mặc định: 100%).
- **error**: Thông báo lỗi (Tùy chọn).
- **width**: Chiều rộng của input (Mặc định: 100%).
- **picker**: Loại picker (week, month, year, quarter, day).
- **format**: Định dạng hiển thị của ngày (chuỗi định dạng).
- **size**: Kích thước của input (large, middle, small). Mặc định: middle.
- **formatInput**: Định dạng đầu vào (chuỗi).
- **view**: Hiển thị theo year, month, day.
- **min**: Ngày nhỏ nhất có thể chọn.
- **max**: Ngày lớn nhất có thể chọn.

### Component CCalendarRange

```javascript
import React, { useState } from "react";
import { CCalendarRange } from "react-data-entry";

const MyComponent = () => {
  const [range, setRange] = useState(["", ""]);

  const handleChange = (e) => {
    setRange(e.target.value);
  };

  return (
    <CCalendarRange
      label="Select Date Range"
      name="calendarRange"
      placeholder="Choose a date range"
      value={range}
      handleChange={handleChange}
      required={true}
      error="Range is required"
      format="YYYY-MM-DD"
      width="400px"
    />
  );
};

export default MyComponent;
```

#### Props

- **label**: Nhãn cho trường nhập liệu (Tùy chọn).
- **required**: Có yêu cầu nhập dữ liệu hay không (Mặc định: false).
- **name**: Tên của trường input.
- **placeholder**: Văn bản gợi ý cho trường nhập liệu (Tùy chọn).
- **handleChange**: Hàm xử lý sự kiện khi giá trị của input thay đổi.
- **value**: Giá trị của input (mảng chuỗi).
- **labelWidth**: Chiều rộng của nhãn (Mặc định: 100%).
- **error**: Thông báo lỗi (Tùy chọn).
- **width**: Chiều rộng của input (Mặc định: 100%).
- **format**: Định dạng hiển thị của ngày (chuỗi định dạng).
- **size**: Kích thước của input (large, middle, small). Mặc định: middle.
- **formatInput**: Định dạng đầu vào (chuỗi).
- **view**: Hiển thị theo year, month, day.
- **min**: Ngày nhỏ nhất có thể chọn.
- **max**: Ngày lớn nhất có thể chọn.

### Component CCurrency

```javascript
import React, { useState } from "react";
import { CCurrency } from "react-data-entry";

const MyComponent = () => {
  const [amount, setAmount] = useState(0);

  const handleChange = (value) => {
    setAmount(value);
  };

  return (
    <CCurrency
      label="Enter Amount"
      name="currency"
      placeholder="Enter amount"
      value={amount}
      handleChange={handleChange}
      required={true}
      min={0}
      max={10000}
      prefix="$"
      width="200px"
    />
  );
};

export default MyComponent;
```

#### Props

- **label**: Nhãn cho trường nhập liệu (Tùy chọn).
- **required**: Có yêu cầu nhập dữ liệu hay không (Mặc định: false).
- **name**: Tên của trường input.
- **placeholder**: Văn bản gợi ý cho trường nhập liệu (Tùy chọn).
- **handleChange**: Hàm xử lý sự kiện khi giá trị của input thay đổi.
- **value**: Giá trị của input (số).
- **labelWidth**: Chiều rộng của nhãn (Mặc định: 100%).
- **error**: Thông báo lỗi (Tùy chọn).
- **width**: Chiều rộng của input (Mặc định: 100%).
- **min**: Giá trị nhỏ nhất có thể nhập.
- **max**: Giá trị lớn nhất có thể nhập.
- **size**: Kích thước của input (large, middle, small). Mặc định: middle.
- **suffix**: Chuỗi hiển thị ở cuối input (Tùy chọn).
- **prefix**: Chuỗi hiển thị ở đầu input (Tùy chọn).
- **props**: Các thuộc tính bổ sung khác (Tùy chọn).

## Sử dụng

### Component CEditor

```typescript
import React, { useState } from "react";
import CEditor from "path-to-your-component";

const MyComponent = () => {
  const [content, setContent] = useState("");

  const handleChange = (value) => setContent(value);

  return (
    <CEditor
      label="Enter Content"
      name="editor"
      placeholder="Type here..."
      value={content}
      handleChange={handleChange}
      required
      error="Content is required"
      width="100%"
    />
  );
};

export default MyComponent;
```

### Component CSelect

```typescript
import React, { useState } from "react";
import CSelect from "path-to-your-component";

const MyComponent = () => {
  const [selected, setSelected] = useState([]);
  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
  ];

  const handleChange = (value) => setSelected(value);

  return (
    <CSelect
      label="Select Options"
      name="select"
      placeholder="Choose options"
      value={selected}
      handleChange={handleChange}
      required
      error="Selection is required"
      options={options}
      type="multiple"
      width="100%"
    />
  );
};

export default MyComponent;
```

### Component CTextarea

```typescript
import React, { useState } from "react";
import CTextarea from "path-to-your-component";

const MyComponent = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);

  return (
    <CTextarea
      label="Enter Text"
      name="textarea"
      placeholder="Type your text"
      value={text}
      handleChange={handleChange}
      required
      error="Text is required"
      width="100%"
      maxLength={500}
    />
  );
};

export default MyComponent;
```

### Component CTextField

```typescript
import React, { useState } from "react";
import CTextField from "path-to-your-component";

const MyComponent = () => {
  const [input, setInput] = useState("");

  const handleChange = (e) => setInput(e.target.value);

  return (
    <CTextField
      label="Enter Input"
      name="textfield"
      placeholder="Type here"
      value={input}
      handleChange={handleChange}
      required
      error="Input is required"
      width="100%"
      type="text"
    />
  );
};

export default MyComponent;
```

## Props

- **label**: Nhãn (Tùy chọn).
- **required**: Yêu cầu nhập (Mặc định: false).
- **name**: Tên input.
- **placeholder**: Văn bản gợi ý (Tùy chọn).
- **handleChange**: Hàm xử lý thay đổi.
- **value**: Giá trị input.
- **error**: Thông báo lỗi (Tùy chọn).
- **width**: Chiều rộng input (Mặc định: 100%).
- **options**: Các tùy chọn cho `CSelect`.
- **type**: Loại input cho `CSelect` và `CTextField`.
- **maxLength**: Độ dài tối đa cho `CTextarea`.

README.md này mô tả cách sử dụng các component `CEditor`, `CSelect`, `CTextarea`, và `CTextField` trong `react-data-entry`.
