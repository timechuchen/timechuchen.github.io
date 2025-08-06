# Heart

> 本文作者：[程序员鱼皮](https://yuyuanweb.feishu.cn/wiki/Abldw5WkjidySxkKxU2cQdAtnah)
>
> 本站地址：[https://codefather.cn](https://codefather.cn)

# 数据
<DataTable :tableData="tableData" :tableColumns="tableColumns" :total="total" :pageSize="pageSize" :showPagination="true" :loading="false" />

<script>
export default {
  data() {
    return {
      tableData: [
        { id: 1, name: 'John Doe', age: 25, email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', age: 30, email: 'jane@example.com' },
        { id: 3, name: 'Bob Johnson', age: 45, email: 'bob@example.com' },
        { id: 4, name: 'Alice Brown', age: 28, email: 'alice@example.com' },
        { id: 5, name: 'Charlie Davis', age: 35, email: 'charlie@example.com' }
      ],
      tableColumns: [
        { prop: 'id', label: 'ID', width: '180', align: 'center' },
        { prop: 'name', label: 'Name', width: '180' },
        { prop: 'age', label: 'Age', width: '200', align: 'center' },
        { prop: 'email', label: 'Email', width: '200' }
      ],
      total: 5,
      pageSize: 10
    };
  }
};
</script>
