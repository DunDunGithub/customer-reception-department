import classNames from 'classnames/bind';
import styles from './Body.module.scss';
import DataTable from 'react-data-table-component';
import { useState } from 'react';
import AddressGoogle from '../AddressGoogle';

const cx = classNames.bind(styles);

function Body() {
    const column = [
        {
            name: 'Địa chỉ',
            selector: (row) => row.address,
            sortable: true,
        },
        {
            name: 'Khách hàng',
            selector: (row) => row.customer,
            // sorttable: true
        },
        {
            name: 'SĐT',
            selector: (row) => row.phone,
            // sorttable: true
        },
    ];

    const templateData = [
        {
            address: '227 Nguyen Van Cu',
            customer: 'Duc Dung',
            phone: '03992827192',
        },
    ];

    const [records, setRecords] = useState([]);
    const [filterRecords, setFilterRecords] = useState([]);

    const handleFilter = (event) => {
        // const newData = filterRecords.filter((row) =>
        //     row[searchAttribute]
        //         .toLowerCase()
        //         .includes(event.target.value.toLowerCase()),
        // );
        // setRecords(newData);
    };

    const [editPopup, seteditPopup] = useState(false);

    return (
        <div className={cx('body')}>
            <div className={cx('popup-inner')}>
                <form
                    noValidate
                    onSubmit={() => {}}
                    className={cx('form-submit')}
                >
                    {/* Phone number */}
                    <div className={cx('form-item')}>
                        <label htmlFor="phoneNumber">Số điện thoại</label>
                        <input
                            name="phoneNumber"
                            placeholder=""
                            value={''}
                            onChange={() => {}}
                            required
                        />
                    </div>
                    {/* Address */}
                    <div className={cx('form-item')}>
                        <label htmlFor="address">Địa chỉ</label>
                        <input
                            name="address"
                            placeholder=""
                            value={''}
                            onChange={() => {}}
                            required
                        />
                    </div>

                    {/* Loại xe*/}
                    <div className={cx('form-item')}>
                        <label htmlFor="level">Level</label>
                        <select id="level" value={''} onChange={() => {}}>
                            <option value="Car 4">Car 4</option>
                            <option value="Car 7">Car 7</option>
                        </select>
                    </div>

                    <button type="submit">Điều phối </button>
                </form>

                <div className={cx('history')}>
                    Lịch sử địa chỉ
                    <input
                        type="text"
                        placeholder={`Search...`}
                        style={{
                            padding: '4px',
                            width: '250px',
                            marginTop: '10px',
                        }}
                        onChange={() => {}}
                    />
                    <DataTable
                        columns={column}
                        data={templateData}
                        pagination
                    ></DataTable>
                    <AddressGoogle
                        trigger={editPopup}
                        setTrigger={seteditPopup}
                    ></AddressGoogle>
                    <button
                        className={cx('btn-search-address')}
                        onClick={() => {seteditPopup(true);}}
                    >
                        Tìm kiếm
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Body;
