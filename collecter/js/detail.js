$(document).ready(function () {
    var productDetail = {
        "pcr": {
            "1": {
                "name": "(Roche) qSARS-CoV-2 PCR Rapid Test",
                "manufacturer": "Roche",
                "specificty": "82.5%",
                "sensitivity": "98.5%"
            },
            "2": {
                "name": "(Cellex, Inc) qSARS-CoV-2 PCR Rapid Test",
                "manufacturer": "Cellex, Inc",
                "specificty": "90%",
                "sensitivity": "99.5%"
            }
        },
        "ab": {
            "1": {
                "name": "(Roche) qSARS-CoV-2 IgG/IgM Rapid Test",
                "manufacturer": "Roche",
                "specificty": "88.5%",
                "sensitivity": "92.5%"
            },
            "2": {
                "name": "(Cellex, Inc) qSARS-CoV-2 IgG/IgM Rapid Test",
                "manufacturer": "Cellex, Inc",
                "specificty": "93%",
                "sensitivity": "97.5%"
            }
        }
    };

    $("#pcrTest").change(function () {
        var val = $(this).val();
        if (val == 0) {
            $("#pcr_manufacturer").val("");
            $("#pcr_spec").val("");
            $("#pcr_sen").val("");
        } else {
            $("#pcr_manufacturer").val(productDetail.pcr[val].manufacturer);
            $("#pcr_spec").val(productDetail.pcr[val].specificty);
            $("#pcr_sen").val(productDetail.pcr[val].sensitivity);
        }

    });

    $("#abTest").change(function () {
        var val = $(this).val();
        if (val == 0) {
            $("#ab_manufacturer").val("");
            $("#ab_spec").val("");
            $("#ab_sen").val("");
        } else {
            $("#ab_manufacturer").val(productDetail.ab[val].manufacturer);
            $("#ab_spec").val(productDetail.ab[val].specificty);
            $("#ab_sen").val(productDetail.ab[val].sensitivity);
        }

    });
});