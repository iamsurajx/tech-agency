// Frontend-only mock handlers - replace with real API later
export async function submitContactForm(data) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  console.log('Form submission:', data)
  
  // Simulate success (90% of time)
  if (Math.random() > 0.1) {
    return { 
      success: true, 
      message: "Thanks! We'll reply within 2 hours." 
    }
  } else {
    throw new Error("Something went wrong. Please WhatsApp us directly.")
  }
}

export async function bookCall(data) {
  await new Promise(resolve => setTimeout(resolve, 800))
  return { success: true }
}
