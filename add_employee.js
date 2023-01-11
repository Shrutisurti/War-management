
        $("#addEmpRole").select2();
        $("#addEmpDesignation").select2();
        $("#addEmpDepartment").select2();
        $("#addEmpEmploymentStatus").select2();
        $("#addEmpLocation").select2();
        $("#addEmpTOW").select2();

        $("#addEmpJoinDate").datepicker({ dateFormat: 'dd-mm-yy' });

        $(document).on('select2:open', () => {
        document.querySelector('.select2-search__field').focus();
        });

        let passwordVisible = false;
        let passwordInputField = $('#addEmpPassword');
        let passwordEye = $('#passwordToggle');

        $('#passwordToggle').click(function(){

          passwordEye.toggleClass('passwordVisible');

          if(passwordVisible){
            passwordInputField.attr('type', 'password');
            passwordVisible = !passwordVisible;
          } else{
            passwordInputField.attr('type', 'text');
            passwordVisible = !passwordVisible;
          }
        })
        
        $(".dark-overlay").click(function () {
          closeExpandedNav();
        });

        $('#hamburger-icon').click(function(){
          $(".expanded-nav").addClass("expanded");
          $(".dark-overlay").show();
        })

        function closeExpandedNav() {
          $(".expanded-nav").removeClass("expanded");
          setTimeout(() => {
            $(".dark-overlay").hide();
          }, 480);
        }