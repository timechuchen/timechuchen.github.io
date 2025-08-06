<template>
  <div class="table-wrapper">
    <el-table
        :data="tableData"
        border
        max-height="260"
        style="width: 100%; background-color: #eaeaea"
        v-loading="loading"
    >
      <el-table-column
          v-for="(col, index) in tableColumns"
          :key="index"
          :prop="col.prop"
          :label="col.label"
          :width="col.width"
          :align="col.align || 'left'"
      />
    </el-table>

    <div class="pagination" v-if="showPagination">
      <el-pagination
          :current-page.sync="currentPage"
          :page-size="pageSize"
          :total="total"
          layout="total, prev, pager, next, jumper"
          @current-change="handlePageChange"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableWrapper',
  props: {
    tableData: {
      type: Array,
      required: true
    },
    tableColumns: {
      type: Array,
      required: true
    },
    total: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 10
    },
    showPagination: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentPage: 1
    };
  },
  methods: {
    handlePageChange(val) {
      this.$emit('page-change', val);
    }
  }
};
</script>

<style scoped>
.table-wrapper {
  padding: 16px;
  background-color: #fff;
}

.pagination {
  margin-top: 16px;
  text-align: right;
}
</style>
