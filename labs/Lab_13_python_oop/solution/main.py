import os
import json
from datetime import datetime
from writer import XlsAnalyticPaymentWriter

def load_data(file_path):
    full_path = os.path.join(
        "C:\\Users\\Semyon\\Desktop\\gg\\labs\\Lab_13_python_oop",
        file_path
    )

    with open(full_path, 'r', encoding='utf-8') as file:
        data = json.load(file)
    return data

if __name__ == '__main__':
    data_clients = load_data('clients.json')
    data_payments = load_data('payments.json')

    data = {'clients': data_clients['clients'], 'payments': data_payments['payments']}

    timestamp = datetime.now().strftime('%Y_%m_%d_%H_%M_%S')
    output_file = f'Lab_13_VVS{timestamp}.xlsx'

    xls_writer = XlsAnalyticPaymentWriter(data)
    xls_writer.write_excel_report(output_file)

    print(f"Отчет успешно создан. Итоговый файл: {output_file}")