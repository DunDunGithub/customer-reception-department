import classNames from 'classnames/bind';
import styles from './AddressGoogle.module.scss';
import DataTable from 'react-data-table-component';
import { useState } from 'react';

const cx = classNames.bind(styles);

function AddressGoogle(props) {

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
                    <h3>Tìm kiếm địa chỉ từ Google</h3>
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
                </div>

            </div>
        </div>
    ) : (
        ''
    );
}

export default AddressGoogle;
