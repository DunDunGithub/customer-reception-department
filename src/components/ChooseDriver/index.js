import classNames from 'classnames/bind';
import styles from './ChooseDriver.module.scss';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function ChooseDriver(props) {

    const [selectedDriver, setSelectedDriver] = useState(null);

    const [records, setRecords] = useState([]);

    const column = [
        {
            name: 'Tên tài xế',
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: 'Số điện thoại',
            selector: (row) => row.phone,
            // sorttable: true
        },
        {
            name: 'Số chỗ ngồi',
            selector: (row) => row.cabSeats,
            // sorttable: true
        },
        {
            name: '',
            cell: (row) => (
                <button onClick={() => setSelectedDriver(row.name)}>
                    Choose this driver
                </button>
            ),
        },
    ];

    const templateData = [
        {
            name: 'Thai Chi Hien',
            cabSeats: '4',
            phone: '03992827192',
        },
    ];

    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true); // Show loading popup
        try {
            const response = await axios.get(
                'http://localhost:3000/location/all/driver',
            );
            setRecords(response.data);
        } catch (error) {
            console.log('ERROR', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSelect = (driver) => {
        setSelectedDriver(driver);
        props.setTrigger(false)
    };

    return props.trigger ? (
        <div className={cx('popup')}>
            <div className={cx('popup-inner')}>
                <button
                    className={cx('btn-close')}
                    onClick={() => props.setTrigger(false)}
                >
                    Close
                </button>

                <div>
                    <h3>Danh sách tài xế</h3>
                
                </div>

                <DataTable
                    columns={column}
                    data={records}
                    pagination
                    onSelectedRowsChange={(state) => {
                        if (state.selectedCount === 1) {
                            // Get the selected row data
                            const selectedRowData =
                                state.selectedRows[0]._source;
                            const selectedAddress = selectedRowData.address;
                            handleSelect(selectedAddress); // Call the function to store the selected address
                        } else {
                            setSelectedDriver(null); // Reset selected address
                        }
                    }}
                />
            </div>
        </div>
    ) : (
        ''
    );
}

export default ChooseDriver;
