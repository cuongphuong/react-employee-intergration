import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoryItem from './CategoryItem';


class Drawer extends Component {

    render() {
        return (
            <div id="pg_id_app_drawer">
                <div className="pg_class_drawer_block">
                    <Link to="/">
                    <p id="pg_block_icon">
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" style={{pointerEvents: 'none', display: 'block', width: '100%', height: '100%'}}>
                        <g className="style-scope yt-icon">
                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8" className="style-scope yt-icon" />
                        </g>
                        </svg>
                    </p>
                    <p id="pg_block_name">Dashboard</p>
                    </Link>
                </div> {/* home */}

                <div className="pg_class_drawer_block">
                    <Link to="/about">
                    <p id="pg_block_icon">
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 55 55" style={{enableBackground: 'new 0 0 55 55'}} xmlSpace="preserve">
                        <g>
                            <path d="M51.376,45.291C46.716,40.66,44.354,35.179,44.354,29v-8.994c0.043-6.857-4.568-11.405-8.53-13.216
                                c-1.135-0.519-2.305-0.919-3.494-1.216V5c0-2.757-2.243-5-5-5s-5,2.243-5,5v0.661c-1.071,0.289-2.124,0.666-3.146,1.138
                                C14.805,8.817,10.369,13.681,10.329,20v9c0,6.388-2.256,11.869-6.705,16.291c-0.265,0.264-0.361,0.653-0.249,1.01
                                s0.415,0.621,0.784,0.685l9.491,1.639c1.768,0.305,3.396,0.555,4.945,0.761C20.341,52.806,23.768,55,27.512,55
                                c3.745,0,7.173-2.196,8.917-5.618c1.543-0.205,3.163-0.454,4.921-0.758l9.49-1.639c0.369-0.063,0.671-0.328,0.784-0.685
                                C51.737,45.944,51.641,45.555,51.376,45.291z M24.329,5c0-1.654,1.346-3,3-3s3,1.346,3,3v0.182c-1.993-0.286-4.015-0.274-6,0.047V5
                                z M27.512,53c-2.532,0-4.898-1.258-6.417-3.315c2.235,0.23,4.321,0.346,6.406,0.346c2.093,0,4.186-0.116,6.43-0.349
                                C32.411,51.741,30.044,53,27.512,53z M41.01,46.653c-1.919,0.331-3.678,0.6-5.34,0.812c-0.002,0-0.004,0-0.006,0
                                c-0.732,0.093-1.444,0.174-2.141,0.244c-0.007,0.001-0.015,0.001-0.022,0.002c-0.637,0.064-1.26,0.115-1.876,0.16
                                c-0.117,0.009-0.233,0.016-0.35,0.024c-0.534,0.035-1.062,0.063-1.587,0.083c-0.108,0.004-0.216,0.01-0.324,0.013
                                c-1.244,0.042-2.471,0.042-3.714,0.001c-0.11-0.004-0.222-0.009-0.332-0.014c-0.518-0.02-1.04-0.047-1.567-0.082
                                c-0.124-0.008-0.248-0.016-0.373-0.025c-0.6-0.043-1.207-0.094-1.828-0.155c-0.022-0.002-0.043-0.004-0.064-0.006
                                c-0.692-0.069-1.399-0.15-2.126-0.242c-0.003,0-0.006,0-0.009,0c-1.668-0.211-3.433-0.482-5.361-0.814L6.329,45.33
                                c3.983-4.554,6-10.038,6-16.33v-8.994c0.034-5.435,3.888-9.637,7.691-11.391c1.131-0.521,2.304-0.91,3.497-1.183
                                c0.01-0.002,0.021-0.001,0.031-0.003c2.464-0.554,5.087-0.579,7.58-0.068c0.013,0.003,0.026-0.003,0.039-0.001
                                c1.304,0.272,2.588,0.684,3.825,1.249c3.689,1.687,7.396,5.861,7.361,11.392v9c0,6.033,2.175,11.643,6.313,16.331L41.01,46.653z" />
                            <path d="M33.746,11.338c-3.875-1.771-8.62-1.773-12.469,0.002c-2.195,1.012-5.918,3.973-5.948,8.654
                                c-0.003,0.552,0.441,1.002,0.994,1.006c0.002,0,0.004,0,0.006,0c0.549,0,0.997-0.443,1-0.994c0.023-3.677,3.019-6.035,4.785-6.85
                                c3.331-1.537,7.446-1.533,10.799,0c0.502,0.23,1.096,0.009,1.326-0.493C34.469,12.16,34.248,11.567,33.746,11.338z" />
                        </g>
                        </svg>
                    </p>
                    <p id="pg_block_name">Thông báo</p>
                    </Link>
                </div> {/* about */}

                <div className="pg_class_drawer_title">Danh mục</div>

                <CategoryItem idCategory="50" images='M 6.667969 4 C 5.207031 4 4 5.207031 4 6.667969 L 4 43.332031 C 4 44.792969 5.207031 46 6.667969 46 L 43.332031 46 C 44.792969 46 46 44.796875 46 43.332031 L 46 6.667969 C 46 5.207031 44.796875 4 43.332031 4 Z M 6.667969 6 L 43.332031 6 C 43.703125 6 44 6.296875 44 6.667969 L 44 43.332031 C 44 43.703125 43.703125 44 43.332031 44 L 6.667969 44 C 6.296875 44 6 43.703125 6 43.332031 L 6 6.667969 C 6 6.296875 6.296875 6 6.667969 6 Z M 23 23 L 23 35.574219 C 23 37.503906 22.269531 38 21 38 C 19.671875 38 18.75 37.171875 18.140625 36.097656 L 15 38 C 15.910156 39.925781 18.140625 42 21.234375 42 C 24.65625 42 27 40.179688 27 36.183594 L 27 23 Z M 35.453125 23 C 32.046875 23 29.863281 25.179688 29.863281 28.042969 C 29.863281 31.148438 31.695313 32.617188 34.449219 33.789063 L 35.402344 34.199219 C 37.140625 34.960938 38 35.425781 38 36.734375 C 38 37.824219 37.171875 38.613281 35.589844 38.613281 C 33.707031 38.613281 32.816406 37.335938 32 36 L 29 38 C 30.121094 40.214844 32.132813 42 35.675781 42 C 39.300781 42 42 40.117188 42 36.683594 C 42 33.496094 40.171875 32.078125 36.925781 30.6875 L 35.972656 30.28125 C 34.335938 29.570313 33.625 29.109375 33.625 27.964844 C 33.625 27.039063 34.335938 26.328125 35.453125 26.328125 C 36.550781 26.328125 37.253906 26.792969 37.90625 27.964844 L 40.878906 26.058594 C 39.625 23.84375 37.878906 23 35.453125 23 Z ' title="Tổng lương"></CategoryItem>

                {/* <CategoryItem idCategory="48" images='M 29.984375 1.984375 C 29.9375 1.988281 29.886719 1.992188 29.839844 2 L 7 2 L 7 48 L 43 48 L 43 15.167969 C 43.019531 15.058594 43.019531 14.949219 43 14.84375 L 43 14.585938 L 42.808594 14.390625 C 42.753906 14.320313 42.6875 14.257813 42.617188 14.203125 L 30.792969 2.375 C 30.738281 2.304688 30.675781 2.242188 30.605469 2.1875 L 30.414063 2 L 30.15625 2 C 30.097656 1.992188 30.042969 1.984375 29.984375 1.984375 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.414063 L 39.585938 14 L 31 14 Z M 26 22 L 22 38 L 24 38 L 28 22 Z M 18.140625 24.484375 L 14.832031 30 L 18.140625 35.515625 L 19.859375 34.484375 L 17.167969 30 L 19.859375 25.515625 Z M 31.855469 24.484375 L 30.140625 25.515625 L 32.832031 30 L 30.140625 34.484375 L 31.859375 35.515625 L 35.167969 30 Z ' title="HTML"></CategoryItem>

                <CategoryItem idCategory="49" images='M 7 2 L 7 48 L 43 48 L 43 15.410156 L 29.183594 2 Z M 9 4 L 28 4 L 28 17 L 41 17 L 41 46 L 9 46 Z M 30 5.578125 L 39.707031 15 L 30 15 Z M 20.394531 23.46875 C 18.429688 23.46875 16.3125 24.953125 16.3125 28.761719 C 16.3125 31.625 17.546875 33.757813 20.125 33.757813 C 20.816406 33.757813 21.371094 33.652344 21.65625 33.515625 L 21.460938 31.867188 C 21.222656 31.941406 20.84375 32.015625 20.515625 32.015625 C 19.316406 32.015625 18.402344 31.070313 18.402344 28.65625 C 18.402344 26.152344 19.40625 25.191406 20.515625 25.191406 C 20.949219 25.191406 21.203125 25.28125 21.429688 25.386719 L 21.761719 23.734375 C 21.566406 23.601563 21.085938 23.46875 20.394531 23.46875 Z M 25.539063 23.46875 C 23.425781 23.46875 22.34375 24.816406 22.34375 26.4375 C 22.34375 27.351563 22.871094 28.417969 24.25 29.257813 C 25.105469 29.8125 25.554688 30.171875 25.554688 30.90625 C 25.554688 31.566406 25.105469 32.046875 24.175781 32.046875 C 23.605469 32.046875 22.914063 31.882813 22.511719 31.65625 L 22.222656 33.351563 C 22.554688 33.546875 23.351563 33.757813 24.160156 33.757813 C 26.140625 33.757813 27.503906 32.542969 27.503906 30.699219 C 27.503906 29.632813 27.011719 28.613281 25.675781 27.800781 C 24.582031 27.144531 24.28125 26.828125 24.28125 26.226563 C 24.28125 25.6875 24.683594 25.175781 25.527344 25.175781 C 26.09375 25.175781 26.53125 25.339844 26.8125 25.519531 L 27.128906 23.828125 C 26.832031 23.644531 26.199219 23.46875 25.539063 23.46875 Z M 31.449219 23.46875 C 29.335938 23.46875 28.253906 24.816406 28.253906 26.4375 C 28.253906 27.351563 28.78125 28.417969 30.160156 29.257813 C 31.015625 29.8125 31.464844 30.171875 31.464844 30.90625 C 31.464844 31.566406 31.015625 32.046875 30.085938 32.046875 C 29.515625 32.046875 28.824219 31.882813 28.421875 31.65625 L 28.136719 33.351563 C 28.464844 33.546875 29.261719 33.757813 30.070313 33.757813 C 32.050781 33.757813 33.414063 32.542969 33.414063 30.699219 C 33.414063 29.632813 32.921875 28.613281 31.585938 27.800781 C 30.492188 27.144531 30.1875 26.828125 30.1875 26.226563 C 30.1875 25.6875 30.59375 25.175781 31.4375 25.175781 C 32.003906 25.175781 32.441406 25.339844 32.722656 25.519531 L 33.039063 23.828125 C 32.738281 23.644531 32.109375 23.46875 31.449219 23.46875 Z ' title="CSS"></CategoryItem>

                <CategoryItem idCategory="51" images='M 34.554688 3.984375 C 33.775003 3.9581582 32.958884 4.0940926 32.140625 4.359375 C 30.504109 4.889941 28.789203 5.9238848 27.029297 7.3554688 C 26.339589 7.9165071 25.643623 8.5578288 24.945312 9.2382812 C 24.262398 8.5751039 23.580733 7.9490442 22.90625 7.4003906 C 21.147758 5.9699557 19.4375 4.9375672 17.804688 4.4082031 C 16.171878 3.8788386 14.547223 3.8624356 13.212891 4.6328125 C 11.878558 5.4031893 11.080619 6.8173558 10.722656 8.4960938 C 10.364693 10.174832 10.402173 12.173992 10.761719 14.412109 C 10.886606 15.189511 11.066671 16.005078 11.269531 16.835938 C 10.507095 17.067004 9.7666767 17.309955 9.0800781 17.578125 C 7.0079817 18.387438 5.2934468 19.355663 4.0449219 20.507812 C 2.7963969 21.659962 1.9902344 23.058304 1.9902344 24.59375 C 1.9902344 26.129196 2.7963969 27.525585 4.0449219 28.677734 C 5.2934468 29.829884 7.0079817 30.800062 9.0800781 31.609375 C 9.8142516 31.896126 10.609118 32.154326 11.429688 32.398438 C 11.134531 33.501278 10.895394 34.571467 10.732422 35.585938 C 10.372587 37.825853 10.334588 39.825265 10.693359 41.507812 C 11.052134 43.19036 11.850478 44.612534 13.191406 45.386719 C 14.532336 46.160905 16.164264 46.141894 17.800781 45.611328 C 19.437297 45.080762 21.15025 44.048772 22.910156 42.617188 C 23.593512 42.061316 24.284757 41.427206 24.976562 40.753906 C 25.671663 41.430886 26.366333 42.068604 27.052734 42.626953 C 28.811227 44.057387 30.523438 45.089776 32.15625 45.619141 C 33.789061 46.148505 35.411762 46.164908 36.746094 45.394531 C 38.080426 44.624154 38.878366 43.209988 39.236328 41.53125 C 39.59429 39.852512 39.554857 37.85335 39.195312 35.615234 C 39.031899 34.598012 38.792614 33.526227 38.496094 32.419922 C 39.343769 32.169866 40.163744 31.904721 40.919922 31.609375 C 42.992018 30.800062 44.706553 29.829884 45.955078 28.677734 C 47.203603 27.525585 48.009766 26.129196 48.009766 24.59375 C 48.009766 23.058304 47.203603 21.659963 45.955078 20.507812 C 44.706553 19.355663 42.992018 18.387438 40.919922 17.578125 C 40.22347 17.306107 39.471688 17.059992 38.697266 16.826172 C 38.901775 15.990221 39.083345 15.168805 39.208984 14.386719 C 39.568819 12.146804 39.606825 10.145439 39.248047 8.4628906 C 38.889279 6.7803434 38.088976 5.3601244 36.748047 4.5859375 C 36.077582 4.1988452 35.334372 4.0105918 34.554688 3.984375 z M 34.462891 6.0195312 C 34.952154 6.03291 35.369535 6.1493386 35.726562 6.3554688 C 36.440618 6.7677287 36.968419 7.5700924 37.25 8.890625 C 37.531581 10.211156 37.521848 11.99533 37.189453 14.064453 C 37.075647 14.772878 36.910402 15.52369 36.722656 16.292969 C 34.677708 15.800829 32.436969 15.435424 30.048828 15.220703 C 28.849094 13.558465 27.615953 12.046374 26.373047 10.703125 C 27.030182 10.061662 27.683063 9.4617259 28.320312 8.9433594 C 29.946026 7.6209332 31.485126 6.7210962 32.769531 6.3046875 C 33.411734 6.0964824 33.973627 6.0061525 34.462891 6.0195312 z M 15.486328 6.0253906 C 15.978419 6.0116533 16.541491 6.1017415 17.185547 6.3105469 C 18.473657 6.7281576 20.015451 7.6275969 21.642578 8.9511719 C 22.266889 9.4590141 22.905452 10.045872 23.548828 10.671875 C 22.296955 12.025781 21.055175 13.553705 19.847656 15.230469 C 17.468002 15.449155 15.235261 15.818024 13.199219 16.3125 C 13.012686 15.546898 12.84964 14.799095 12.736328 14.09375 C 12.403642 12.02283 12.39534 10.236451 12.677734 8.9121094 C 12.960128 7.5877677 13.492238 6.7813032 14.212891 6.3652344 C 14.573216 6.1572002 14.994237 6.0391279 15.486328 6.0253906 z M 24.976562 12.142578 C 25.791064 13.028975 26.606064 13.9993 27.414062 15.042969 C 26.620033 15.009861 25.816288 14.990234 25 14.990234 C 24.167457 14.990234 23.34841 15.010498 22.539062 15.044922 C 23.347352 14.000306 24.16175 13.029737 24.976562 12.142578 z M 25 17.009766 C 26.359894 17.009766 27.685348 17.065647 28.974609 17.160156 C 29.86173 18.434311 30.728648 19.786055 31.554688 21.216797 C 32.280504 22.473948 32.937328 23.729163 33.535156 24.96875 C 32.931017 26.224782 32.263184 27.496972 31.527344 28.771484 C 30.879609 29.893393 30.20319 30.958949 29.515625 31.986328 C 28.059313 32.10805 26.550303 32.175781 25 32.175781 C 23.412375 32.175781 21.869462 32.104031 20.380859 31.976562 C 19.704742 30.963955 19.039735 29.912587 18.402344 28.808594 C 17.668186 27.536996 17.003577 26.269079 16.400391 25.015625 C 17.006106 23.755092 17.673701 22.47818 18.412109 21.199219 C 19.233818 19.775977 20.098207 18.432055 20.980469 17.164062 C 22.283609 17.067424 23.62445 17.009766 25 17.009766 z M 31.550781 17.410156 C 33.198531 17.615819 34.745652 17.90154 36.185547 18.244141 C 35.758129 19.645287 35.231654 21.108808 34.59375 22.619141 C 34.179567 21.820719 33.750599 21.019585 33.287109 20.216797 C 32.725727 19.244455 32.142026 18.315962 31.550781 17.410156 z M 18.34375 17.425781 C 17.764654 18.315097 17.194836 19.224578 16.644531 20.177734 C 16.175094 20.990823 15.737221 21.802736 15.318359 22.611328 C 14.68596 21.110075 14.162654 19.654877 13.738281 18.261719 C 15.168002 17.918363 16.706766 17.633813 18.34375 17.425781 z M 38.164062 18.775391 C 38.872944 18.989877 39.557566 19.21371 40.185547 19.458984 C 42.0957 20.205046 43.60665 21.088493 44.585938 21.992188 C 45.565224 22.895882 45.990234 23.757696 45.990234 24.59375 C 45.990234 25.429804 45.565225 26.291619 44.585938 27.195312 C 43.60665 28.099007 42.0957 28.982454 40.185547 29.728516 C 39.487698 30.001079 38.72096 30.248243 37.923828 30.482422 C 37.355199 28.723643 36.629408 26.888772 35.765625 25.015625 C 36.758785 22.865083 37.561088 20.768289 38.164062 18.775391 z M 11.802734 18.785156 C 12.398795 20.758095 13.190852 22.834207 14.169922 24.962891 C 13.30047 26.846955 12.571087 28.692254 12 30.460938 C 11.23096 30.232919 10.490212 29.992451 9.8144531 29.728516 C 7.9042995 28.982454 6.39335 28.099007 5.4140625 27.195312 C 4.434775 26.291618 4.0097656 25.429804 4.0097656 24.59375 C 4.0097656 23.757696 4.434775 22.895882 5.4140625 21.992188 C 6.39335 21.088493 7.9042995 20.205046 9.8144531 19.458984 C 10.432774 19.217483 11.105915 18.996837 11.802734 18.785156 z M 25 20 C 22.250421 20 20 22.250421 20 25 C 20 27.749579 22.250421 30 25 30 C 27.749579 30 30 27.749579 30 25 C 30 22.250421 27.749579 20 25 20 z M 25 22 C 26.668699 22 28 23.331301 28 25 C 28 26.668699 26.668699 28 25 28 C 23.331301 28 22 26.668699 22 25 C 22 23.331301 23.331301 22 25 22 z M 34.619141 27.363281 C 35.143596 28.604493 35.599462 29.819048 35.982422 30.990234 C 34.779808 31.269089 33.499292 31.504052 32.152344 31.689453 C 32.540071 31.070779 32.922982 30.44057 33.296875 29.792969 C 33.765554 28.981192 34.200846 28.17048 34.619141 27.363281 z M 15.341797 27.365234 C 15.762305 28.177437 16.200272 28.991753 16.671875 29.808594 C 17.041066 30.448052 17.418053 31.072363 17.800781 31.683594 C 16.457817 31.497372 15.181231 31.261605 13.982422 30.982422 C 14.363652 29.81481 14.819744 28.602796 15.341797 27.365234 z M 13.40625 32.923828 C 15.216074 33.352568 17.177716 33.681912 19.257812 33.896484 C 20.646655 35.905245 22.092677 37.70929 23.548828 39.287109 C 22.897813 39.921859 22.252566 40.517583 21.621094 41.03125 C 19.99538 42.353677 18.454326 43.251559 17.169922 43.667969 C 15.885516 44.084378 14.926946 44.029446 14.212891 43.617188 C 13.498835 43.204927 12.972987 42.402563 12.691406 41.082031 C 12.409825 39.761499 12.417606 37.979279 12.75 35.910156 C 12.900793 34.971492 13.12615 33.966374 13.40625 32.923828 z M 36.560547 32.931641 C 36.842786 33.979991 37.069087 34.989811 37.220703 35.933594 C 37.553389 38.004513 37.56169 39.788939 37.279297 41.113281 C 36.996903 42.437623 36.466746 43.24604 35.746094 43.662109 C 35.025442 44.078178 34.059594 44.13441 32.771484 43.716797 C 31.483374 43.299186 29.941578 42.397794 28.314453 41.074219 C 27.678439 40.556858 27.028726 39.958258 26.373047 39.318359 C 27.838664 37.73459 29.295467 35.920758 30.693359 33.900391 C 32.778701 33.687251 34.745791 33.359875 36.560547 32.931641 z M 21.867188 34.101562 C 22.893951 34.157518 23.934244 34.195312 25 34.195312 C 26.030504 34.195312 27.037063 34.159787 28.03125 34.107422 C 27.014961 35.478593 25.979034 36.725149 24.947266 37.847656 C 23.916125 36.722751 22.882145 35.473968 21.867188 34.101562 z ' title="Reat JS"></CategoryItem> */}

            </div>
        );
    }
}

export default Drawer;