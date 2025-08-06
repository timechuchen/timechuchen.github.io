<template>
      <table class="fancy-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>名称</th>
            <th>数值</th>
            <th>状态</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in tableData" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.value }}</td>
            <td>
              <span :class="['status-badge', item.status]">
                {{ item.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </template>

    <script setup>
    // Vue 3 语法
    const tableData = [
      { id: 1, name: "项目A", value: 2450, status: "正常" },
      { id: 2, name: "项目B", value: 1890, status: "警告" },
      { id: 3, name: "项目C", value: 3200, status: "正常" },
      { id: 4, name: "项目D", value: 980, status: "错误" },
    ];
    </script>

    <style scoped>
    .fancy-table {
      width: 100%;
      border-collapse: collapse;
      margin: 1.5rem 0;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }

    .fancy-table th,
    .fancy-table td {
      padding: 12px 16px;
      text-align: left;
    }

    .fancy-table th {
      background-color: #f8fafc;
      font-weight: 600;
      color: #334155;
      border-bottom: 2px solid #e2e8f0;
    }

    .fancy-table td {
      border-bottom: 1px solid #e2e8f0;
    }

    .fancy-table tr:last-child td {
      border-bottom: none;
    }

    .fancy-table tr:hover td {
      background-color: #f1f5f9;
    }

    .status-badge {
      padding: 3px 8px;
      border-radius: 4px;
      font-size: 0.875rem;
    }

    .status-badge.正常 {
      background-color: #dcfce7;
      color: #166534;
    }

    .status-badge.警告 {
      background-color: #fef3c7;
      color: #92400e;
    }

    .status-badge.错误 {
      background-color: #fee2e2;
      color: #b91c1c;
    }
    </style>
    