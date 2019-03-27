import React from 'react';
import css from './Topbar.module.css';
import logo from './logo-original-min.png';

const Topbar = () => {

	return (
		<div className={css.topbar}>
			<div className={css.topbar__navtrigger}>
				<div className={css.topbar__navtrigger__circle}>
					<div className={css.topbar__navtrigger__rowbar}>
					</div>
					<div className={css.topbar__navtrigger__rowbar}>
					</div>
					<div className={css.topbar__navtrigger__rowbar}>
					</div>
            </div>
          </div>
			<div className={css.topbar__logo}>
		      <a href="#" className={css.topbar__logo}>
		      	<img src={logo} className={css.topbar__logo__img} />
				</a>
			</div>
      </div>
	)
}

export default Topbar;