/*=========================================================================================
    File Name: datatables-basic.js
    Description: Basic Datatable
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy  - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

$(document).ready(function ()
{

    /****************************************
    *       js of zero configuration        *
    ****************************************/
    $(window).on('load', function ()
    {
        /**************************************************************
        * js of Tab for COLUMN SELECTORS WITH EXPORT AND PRINT OPTIONS *
        ***************************************************************/

        $('.dataex-html5-selectors').DataTable({
            dom: 'Bfrtip',
            buttons: [
                {
                    extend: 'copyHtml5',
                    exportOptions: {
                        columns: [0, ':visible']
                    }
                },
                {
                    extend: 'pdfHtml5',
                    exportOptions: {
                        columns: ':visible'
                    }
                },
                {
                    text: 'JSON',
                    action: function (e, dt, button, config)
                    {
                        var data = dt.buttons.exportData();

                        $.fn.dataTable.fileSave(
                            new Blob([JSON.stringify(data)]),
                            'Export.json'
                        );
                    }
                },
                {
                    extend: 'print',
                    exportOptions: {
                        columns: ':visible'
                    }
                }
            ]
        });

        /**************************************************
        *       js of scroll horizontal & vertical        *
        **************************************************/

        // $('.scroll-horizontal-vertical').DataTable({
        //     "scrollY": 200,
        //     "scrollX": true
        // });


    })
});
