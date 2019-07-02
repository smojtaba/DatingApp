using System.ComponentModel.DataAnnotations;
namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string  Username { get; set; }
        [Required]
        [StringLength(8,MinimumLength=4, ErrorMessage = "پسور باید حداقل 4 و حداکثر 8 حرف باشد.")]
        public string  Password { get; set; }
        
    }
}