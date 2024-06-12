import React from 'react';
import PropTypes from 'prop-types';
import TelechargerDoc from './TelechargerDoc';
import HeadingUnderlined from './HeadingUnderlined';

const Hierarchy = ({ hierarchy }) => {
    const renderHierarchy = (items, isTopLevel = true) => {
        return items.map((item, index) => (
            <div key={index}>
                {isTopLevel ? (
                    <h1 className="font-poppins font-bold text-[24px] text-[#185B9C]">
                        {item.text}
                    </h1>
                ) : (
                    <HeadingUnderlined text={item.text} />
                )}
                {item.subItems && (
                    <div className="ml-8 my-4">
                        {item.subItems.every(subItem => subItem.link) ? (
                            item.subItems.map((subItem, subIndex) => (
                                <TelechargerDoc
                                    key={subIndex}
                                    text={subItem.text}
                                    link={subItem.link}
                                    additionalStyles={"mt-4 w-[300%]"}
                                />
                            ))
                        ) : (
                            renderHierarchy(item.subItems, false)
                        )}
                    </div>
                )}
            </div>
        ));
    };

    return <div>{renderHierarchy(hierarchy)}</div>;
};

Hierarchy.propTypes = {
    hierarchy: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            subItems: PropTypes.arrayOf(
                PropTypes.shape({
                    text: PropTypes.string.isRequired,
                    link: PropTypes.string,
                    subItems: PropTypes.array
                })
            )
        })
    ).isRequired
};

export default Hierarchy;
