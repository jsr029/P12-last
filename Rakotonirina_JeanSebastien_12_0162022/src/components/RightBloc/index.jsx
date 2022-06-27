import React from 'react'
import PropTypes from 'prop-types'

/**
 * Displays right bloc html datas
 * @param { Number } calories 
 * @param { Number } protein  * 
 * @param { Number } glucid 
 * @param { Number } lipid 

 * @returns { Html } the right bloc with icons image and datas
 */
function RightBloc ({ calories, protein, glucid, lipid }) {
    return (
            <div className='sportSee-main-right'>
            <div className='sportSee-main-calories'>
                <div className='sportSee-main-calImg'>
                    <img src='http://127.0.0.1:3000/img/calories.png' alt='Calories Icon' />
                </div>
                <div className='sportSee-main-calBloc'>
                    <div className='sportSee-main-calNum'>
                        {calories / 1000}kCal
                    </div>
                    <div className='sportSee-main-calText'>
                        Calories
                    </div>
                </div>
            </div>
            <div className='sportSee-main-protein'>
                <div className='sportSee-main-calImg'>
                    <img src='http://127.0.0.1:3000/img/protein.png' alt='Protein Icon' />
                </div>
                <div className='sportSee-main-calBloc'>
                    <div className='sportSee-main-calNum'>
                        {protein}g
                    </div>
                    <div className='sportSee-main-calText'>
                        Proteines
                    </div>
                </div>
            </div>
            <div className='sportSee-main-carbohydrate'>
                <div className='sportSee-main-calImg'>
                    <img src='http://127.0.0.1:3000/img/glucid.png' alt='Protein Icon' />
                </div>
                <div className='sportSee-main-calBloc'>
                    <div className='sportSee-main-calNum'>
                        {glucid}g
                    </div>
                    <div className='sportSee-main-calText'>
                        Glucides
                    </div>
                </div>
            </div>
            <div className='sportSee-main-lipid'>
                <div className='sportSee-main-calImg'>
                    <img src='http://127.0.0.1:3000/img/lipid.png' alt='Protein Icon' />
                </div>
                <div className='sportSee-main-calBloc'>
                    <div className='sportSee-main-calNum'>
                        {lipid}g
                    </div>
                    <div className='sportSee-main-calText'>
                        Lipides
                    </div>
                </div>
            </div>
        </div>
    );
};
RightBloc.propTypes = {
    /**
     * All required for displaying the datas right bloc
     * 
     * calories is number 
     */
    calories: PropTypes.number.isRequired, 
    /**protein is number */
    protein: PropTypes.number.isRequired, 
    /**glucid is number */
    glucid: PropTypes.number.isRequired, 
    /**lipid is number */
    lipid: PropTypes.number.isRequired
}
export default RightBloc;